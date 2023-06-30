import React from 'react';
import { ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Background from '../../components/Background';
import { Text } from 'react-native-paper';
import { Card, styles } from './style';
import usePosts from '../../hook/usePosts';

const Notification = () => {
    
    const { posts } = usePosts()

    return (
        <Background
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0000'
            }}
        >
            <Animatable.View animation='fadeInDown' delay={500}>
                <ScrollView>
                    {posts.map((val) => (
                        <Card>
                            <Text style={styles.textStyle}>{val.title}</Text>
                            <Text>{val.body}</Text>
                        </Card>
                    ))}
                </ScrollView>
            </Animatable.View>
        </Background>
    );
};

export default Notification;
