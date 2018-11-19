package fr.cpe.common;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "user")
public class UserModel implements Serializable {

    @Id
    @Column(name = "login", nullable = false, unique = true)
    private String login;

    @Column(name = "pwd", nullable = false)
    private String pwd;

    @Column(name = "lastName", nullable = false)
    private String lastName;

    @Column(name = "surName", nullable = false)
    private String surName;

    @Column(name = "role", nullable = false)
    private String role;

    public UserModel(String login, String pwd) {
        this.login = login;
        this.pwd = pwd;
        this.role = "";
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "UserModel{" +
                "login='" + login + '\'' +
                ", pwd='" + pwd + '\'' +
                ", lastName='" + lastName + '\'' +
                ", surName='" + surName + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
