package com.example.application.views.category;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H5;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Category")
@Route(value = "category", layout = MainLayout.class)
public class Category extends Div {

    public Category() {
        Div categoryContainer = new Div();
        categoryContainer.addClassName("dashboard-content");

        Div categoryContent = new Div();
        categoryContent.addClassName("category-content");

        Div productsContainer = new Div();
        productsContainer.addClassName("category-products-container");
        Div productsTable = new Div();
        productsTable.addClassName("category-products");
        Div wrapper = new Div();
        wrapper.addClassName("category-wrapper");

        Select<String> select = new Select<>();
        select.setItems("Antiseptics", "Antimalarial", "Antibiotics");
        select.setPlaceholder("Antiseptic");
        select.getStyle().setWidth("250px");

        H5 medicineName = new H5("Medicine Name");
        medicineName.addClassName("card-text");
        H5 medicinePrice = new H5("Price(GH)");
        medicinePrice.addClassName("card-text");
        H5 medicineCategory = new H5("Category");
        medicineCategory.addClassName("card-text");
        H5 medicineTotalPurchase = new H5("Total Purchase");
        medicineTotalPurchase.addClassName("card-text");
        H5 medicineTotalQuantity = new H5("Total Quantity");
        medicineTotalQuantity.addClassName("card-text");

        wrapper.add(medicineName, medicinePrice, medicineCategory, medicineTotalPurchase, medicineTotalQuantity);
        productsTable.add(wrapper);
        productsContainer.add(productsTable);

        categoryContent.add(select, productsContainer);
        categoryContainer.add(categoryContent);
        add(categoryContainer);
    }
}
