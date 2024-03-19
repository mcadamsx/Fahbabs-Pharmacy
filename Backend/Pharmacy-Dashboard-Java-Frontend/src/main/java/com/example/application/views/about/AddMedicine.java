package com.example.application.views.about;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Add Medicine")
@Route(value = "add-medicine", layout = MainLayout.class)
public class AddMedicine extends VerticalLayout {

    public AddMedicine() {
        Div medicineContainer = new Div();
        medicineContainer.addClassName("medicine-container");
        Div fieldContainer = new Div();
        fieldContainer.addClassName("field-container");

        Div fieldOne = new Div();
        fieldOne.addClassName("add-input");
        Div fieldTwo = new Div();
        fieldTwo.addClassName("add-input");
        Div saveContainer = new Div();
        saveContainer.addClassName("save-container");

        H2 addText = new H2("Add Medicine");
        addText.addClassName("text");

        TextField name = new TextField("Name");
        name.getStyle().setWidth("400px");

        Select<String> select = new Select<>();
        select.setLabel("Category");
        select.setItems("Antiseptics", "Antimalarial", "Antibiotics");
        select.setPlaceholder("select category");
        select.getStyle().setWidth("400px");
        TextField medicine = new TextField("Medicine");
        medicine.getStyle().setWidth("400px");
        TextField categoryQuantity = new TextField("Quantity");
        categoryQuantity.getStyle().setWidth("400px");

        TextArea sideEffects = new TextArea("Side Effects", "Add text here...");
        sideEffects.getStyle().setWidth("400px");
        sideEffects.getStyle().setHeight("150px");

        TextField quantity = new TextField("Quantity");
        quantity.getStyle().setWidth("400px");
        TextField price = new TextField("Price");
        price.getStyle().setWidth("400px");
        TextArea instructions = new TextArea("Side Effects", "Add text here...");
        instructions.getStyle().setWidth("400px");
        instructions.getStyle().setHeight("150px");

        Button save = new Button("Save Details");
        save.addClassName("save-btn");

        fieldOne.add(name, select, sideEffects);
        fieldTwo.add(quantity, price, instructions);
        fieldContainer.add(fieldOne, fieldTwo);
        saveContainer.add(save);
        medicineContainer.add(addText, fieldContainer, saveContainer);
        add(medicineContainer);
    }

}
