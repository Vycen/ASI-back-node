package fr.cpe.receiver;

import fr.cpe.common.UserModel;

import javax.ejb.Local;

@Local
public interface MessageReceiverSyncLocal {
    public UserModel receiveMessage();
}
