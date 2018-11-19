package fr.cpe.sender;

import fr.cpe.common.UserModel;

import javax.ejb.Local;

@Local
public interface MessageSenderQueueLocal {

    public void sendMessage(String message);

    public void sendMessage(UserModel user);
}
