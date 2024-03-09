package com.example.application.views.auth;

import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Login")
@Route(value = "")
public class Login extends Div {

    public Login() {
        Div loginContainer = new Div();
        loginContainer.addClassName("login-container");

        Div loginForm = new Div();
        loginForm.addClassName("login-form");

        HorizontalLayout inputNameField = new HorizontalLayout();
        inputNameField.addClassName("input-container");

        HorizontalLayout inputPasswordField = new HorizontalLayout();
        inputPasswordField.addClassName("input-container");

        H2 logoName = new H2("FAHBABS PHARMACY");
        logoName.addClassName("logo");

        Image logoImage = new Image("images/logo.png", "logo-image");
        logoImage.addClassName("img");

        TextField username = new TextField("", "username");
        username.addClassName("input");
        Image userImg = new Image("images/user.png", "user-icon");
        userImg.getStyle().setWidth("18px");
        inputNameField.add(userImg, username);

        PasswordField password = new PasswordField("", "password");
        password.addClassName("input");
        Image passwordImg = new Image("images/password.png", "password-icon");
        passwordImg.getStyle().setWidth("18px");
        passwordImg.addClassName("input-img");
        inputPasswordField.add(passwordImg, password);

        Button btn = getButton(username, password);

        loginForm.add(logoName, logoImage, inputNameField, inputPasswordField, btn);

        loginContainer.add(loginForm);

        add(loginContainer);
    }

    private static Button getButton(TextField username, PasswordField password) {
        Button btn = new Button("Login");
        btn.addClickListener(event -> {
            String userField = username.getValue();
            String userPassword = password.getValue();

            if((userField.equals("admin")) && (userPassword.equals("@admin123"))) {
                UI.getCurrent().navigate("dashboard");
                Notification.show("Admin Logged in Successfully");
            } else if ((userField.equals("dispense")) && (userPassword.equals("@dispense123"))) {
                UI.getCurrent().navigate("dispense");
                Notification.show("Dispenser Logged in Successfully");
            } else if ((userField.equals("user")) && (userPassword.equals("@user123"))) {
                Notification.show("User Logged in Successfully");
            } else if ((userField.equals("isEmpty")) && (userPassword.equals("isEmpty"))) {
                Notification.show("Credentials Required");
            } else {
                Notification.show("Wrong Credentials");
            }
        } );
        btn.addClassName("btn");
        btn.addClickShortcut(Key.ENTER);
        return btn;
    }
}
