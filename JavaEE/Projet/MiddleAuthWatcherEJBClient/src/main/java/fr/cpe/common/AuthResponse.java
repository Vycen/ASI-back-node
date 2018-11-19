package fr.cpe.common;

public class AuthResponse {

    private String login;
    private boolean validAuth;
    private String role;

    public AuthResponse(String login, boolean validAuth, String role) {
        this.login = login;
        this.validAuth = validAuth;
        this.role = role;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
