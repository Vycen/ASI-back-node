package fr.cpe.common;

import javax.persistence.*;
import java.io.Serializable;
import javax.validation.constraints.NotNull;

import static javax.persistence.GenerationType.*;

@Entity
@Table(name = "users")
@NamedQuery(name = "Users.all", query = "select u from UserModel u")
public class UserModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "login", unique = true, nullable = false)
    private String login;

    @Column(name = "pwd", nullable = false)
    private String pwd;

    @Column(name = "lastName", nullable = false)
    private String lastName;

    @Column(name = "surName", nullable = false)
    private String surName;

    @Column(name = "role", nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

    public UserModel() {
    }

    public UserModel(String login, String pwd) {
        this.login = login;
        this.pwd = pwd;
        this.role = Role.NONE;
    }

    public UserModel(String pwd, String lastName, String surName, Role role) {
        this.pwd = pwd;
        this.lastName = lastName;
        this.surName = surName;
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
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
