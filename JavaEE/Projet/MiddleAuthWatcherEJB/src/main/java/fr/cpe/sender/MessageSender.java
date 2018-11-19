package fr.cpe.sender;

import javax.annotation.Resource;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;

import javax.jms.*;

import fr.cpe.common.UserModel;


@Stateless
@LocalBean
public class MessageSender implements MessageSenderLocal {

    @Inject
    private JMSContext context;

    @Resource(mappedName = "java:/jms/watcherAuthJMS")
    private Topic topic;

    public void sendMessage(String message) {

        context.createProducer().send(topic, message);
    }

    public void sendMessage(UserModel user) {

       context.createProducer().send(topic, user);

    }
}
