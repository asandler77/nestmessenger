import React, { useEffect, useState } from 'react';
import { netip } from '../../consts';
import { useForm } from 'react-hook-form';
import { io } from 'socket.io-client';
import { GiftedChat, QuickReplies, User } from 'react-native-gifted-chat';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: User;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  quickReplies?: QuickReplies;
}

const socket = io(`http://${netip}:3000`);

export const Messenger = () => {
  const { control, handleSubmit } = useForm();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat message', message => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, message));
    });
    fetch(`http://${netip}:3000/chat`)
      .then(res => res.json())
      .then(data => {
        const responseMessages = data.map(message => {
          return {
            _id: message._id,
            text: message.message,
            createdAt: message.createdAt,
            user: {
              _id: message.sender,
              name: message.sender,
            },
          };
        });
        setMessages(responseMessages);
      });
  }, []);

  const onSend = (newMessages = []) => {
    socket.emit('chat message', newMessages[0].text);
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  };

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat messages={messages} onSend={newMessages => onSend(newMessages)} user={{ _id: '1' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
