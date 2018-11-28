package fr.cpe.sender;


import fr.cpe.common.UserModel;

import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.jms.JMSContext;
import javax.jms.JMSException;
import javax.jms.ObjectMessage;
import javax.jms.Queue;

/**
 * Session Bean implementation class MessageSenderQueue
 */


@Stateless
public class MessageSenderQueue implements MessageSenderQueueLocal {


    @Inject
    JMSContext context;

    @Resource(mappedName = "java:/jms/queue/watcherqueue")
    Queue queue;

    public void sendMessage(String message) {
        context.createProducer().send(queue, message);

    }


    public void sendMessage(UserModel user) {
        context.createProducer().send(queue, user);
    }

}