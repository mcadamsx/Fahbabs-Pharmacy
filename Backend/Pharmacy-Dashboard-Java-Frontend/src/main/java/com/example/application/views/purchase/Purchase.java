package com.example.application.views.purchase;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.H5;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Purchase")
@Route(value = "purchase", layout = MainLayout.class)
public class Purchase extends Div {

    public Purchase() {
        Div categoryContainer = new Div();
        categoryContainer.addClassName("dashboard-content");

        Div categoryContent = new Div();
        categoryContent.addClassName("category-content");

        Div productsContainer = new Div();
        productsContainer.addClassName("category-products-container");
        Div productsTable = new Div();
        productsTable.addClassName("category-products");

        Div productWrap = new Div();
        productWrap.addClassName("category-wrapper");

        H2 productText = new H2("Purchase");

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
        H5 medicineInStock = new H5("In Stock");
        medicineInStock.addClassName("card-text");

        productWrap.add(medicineName, medicinePrice, medicineCategory, medicineTotalPurchase, medicineTotalQuantity, medicineInStock);
        productsTable.add(productWrap);
        productsContainer.add(productsTable);

        categoryContent.add(productText, productsContainer);
        categoryContainer.add(categoryContent);
        add(categoryContainer);
    }
}
