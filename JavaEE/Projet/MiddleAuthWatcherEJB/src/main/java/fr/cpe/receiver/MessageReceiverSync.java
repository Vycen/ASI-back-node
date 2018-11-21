package fr.cpe.receiver;

import javax.annotation.Resource;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;

import javax.jms.*;

import fr.cpe.common.UserModel;

@Stateless
public class MessageReceiverSync implements MessageReceiverSyncLocal {


    @Inject
    private JMSContext context;

    @Resource(mappedName = "java:/jms/queue/watcherqueue")
    private Queue queue;

    public UserModel receiveMessage() {

        Message message = context.createConsumer(queue).receive(1000);

        UserModel user = null;

        try {
            if(message instanceof ObjectMessage) {
                ObjectMessage msg = (ObjectMessage) message;
                user = (UserModel)msg.getObject();
            }
        } catch (JMSException e) {
            e.printStackTrace();
        }

        return user;

    }

}
