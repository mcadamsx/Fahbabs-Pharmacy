package com.example.application.views.dispense;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.H5;
import com.vaadin.flow.component.html.H6;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Dispense")
@Route(value = "dispense", layout = MainLayout.class)
public class Dispense extends VerticalLayout {

    public Dispense() {
        Div dispenseContainer = new Div();
        dispenseContainer.addClassName("dispense-container");

        Div dispenseForm = new Div();
        dispenseForm.addClassName("dispense-form");

        HorizontalLayout form = new HorizontalLayout();
        form.addClassName("form");

        Div dispenseCategory = new Div();
        dispenseCategory.addClassName("dispense-category");

        Div categoryForm = new Div();
        categoryForm.addClassName("column");
        Div categoryTableContainer = new Div();
        categoryTableContainer.addClassName("table-flow");
        Div categoryTable = new Div();
        categoryTable.addClassName("row");
        Div Buttons = new Div();
        Buttons.addClassName("button-row");
        Div endText = new Div();
        endText.addClassName("right-text");

        H2 text = new H2("Dispense Form");
        text.addClassName("text");

        DatePicker date = new DatePicker("Select Date");
        date.getStyle().setWidth("300px");
        TextField amount = new TextField("Amount", "amount");
        amount.getStyle().setWidth("300px");
        TextField quantity = new TextField("Quantity", "quantity bought");
        quantity.getStyle().setWidth("300px");

        Select<String> select = new Select<>();
        select.setLabel("Category");
        select.setItems("Antiseptics", "Antimalarial", "Antibiotics");
        select.setPlaceholder("select category");
        select.getStyle().setWidth("300px");
        TextField medicine = new TextField("Medicine");
        medicine.getStyle().setWidth("300px");
        TextField categoryQuantity = new TextField("Quantity");
        categoryQuantity.getStyle().setWidth("300px");

        H5 medicineName = new H5("Medicine Name");
        medicineName.addClassName("card-text");
        H5 medicineQuantity = new H5("Quantity");
        medicineQuantity.addClassName("card-text");
        H5 medicinePrice = new H5("Price");
        medicinePrice.addClassName("card-text");
        H5 medicineAmount = new H5("Amount");
        medicineAmount.addClassName("card-text");

        H6 totalText = new H6("Total:");
        totalText.addClassName("total-txt");
        H6 totalPrice = new H6("100.00");
        totalPrice.addClassName("total-price-text");

        Button addList = new Button("Add List");
        addList.addClassName("dispenser-btn");
        Button save = new Button("Save");
        save.addClassName("dispenser-btn");

        form.add(date, amount, quantity);
        categoryForm.add(select, medicine, categoryQuantity);
        categoryTable.add(medicineName, medicineQuantity, medicinePrice, medicineAmount);
        endText.add(totalText, totalPrice);
        categoryTableContainer.add(categoryTable, endText);
        dispenseCategory.add(categoryForm, categoryTableContainer);
        Buttons.add(addList, save);
        dispenseForm.add(form, dispenseCategory, Buttons);
        dispenseContainer.add(text, dispenseForm);
        add(dispenseContainer);
    }
}
