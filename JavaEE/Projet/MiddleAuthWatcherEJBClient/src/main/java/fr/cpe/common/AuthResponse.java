package fr.cpe.common;

public class AuthResponse {

    private String login;
    private boolean validAuth;
    private Role role;

    public AuthResponse(String login, boolean validAuth, Role role) {
        this.login = login;
        this.validAuth = validAuth;
        this.role = role;
    }

    public AuthResponse() {
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public boolean isValidAuth() {
        return validAuth;
    }

    public void setValidAuth(boolean validAuth) {
        this.validAuth = validAuth;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
