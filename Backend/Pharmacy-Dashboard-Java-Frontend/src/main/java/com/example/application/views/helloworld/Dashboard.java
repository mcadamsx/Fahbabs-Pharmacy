package com.example.application.views.helloworld;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Dashboard")
@Route(value = "dashboard", layout = MainLayout.class)
public class Dashboard extends Div {
    public Dashboard() {

        Div dashboardContent = new Div();
        dashboardContent.addClassName("dashboard-content");

        Div cards = new Div();
        cards.addClassName("cards-grid");
        Div cardItem = new Div();
        cardItem.addClassName("card");
        Div cardItemTwo = new Div();
        cardItemTwo.addClassName("card");
        Div cardItemThree = new Div();
        cardItemThree.addClassName("card");
        Div cardItemFour = new Div();
        cardItemFour.addClassName("card");

        HorizontalLayout inline = new HorizontalLayout();
        inline.addClassName("inline");
        HorizontalLayout inlineTwo = new HorizontalLayout();
        inlineTwo.addClassName("inline");
        HorizontalLayout inlineThree = new HorizontalLayout();
        inlineThree.addClassName("inline");
        HorizontalLayout inlineFour = new HorizontalLayout();
        inlineFour.addClassName("inline");

        Div span = new Div();
        span.addClassName("span");
        Div spanTwo = new Div();
        spanTwo.addClassName("span");
        Div spanThree = new Div();
        spanThree.addClassName("span");
        Div spanFour = new Div();
        spanFour.addClassName("span");

        Div productsContainer = new Div();
        productsContainer.addClassName("products-container");
        Div productsTable = new Div();
        productsTable.addClassName("products");
        Div wrapper = new Div();
        wrapper.addClassName("wrapper");

        Image stockImg = new Image("images/stock.png", "stock-img");
        stockImg.getStyle().setWidth("25px");
        span.add(stockImg);
        H5 stockText = new H5("Total stock quantity");
        stockText.addClassName("card-text");
        inline.add(span, stockText);
        H2 priceText = new H2("500");
        priceText.addClassName("price-text");
        Button details = new Button("show details");
        details.addClassName("details-btn");

        Image stockImgTwo = new Image("images/sales.png", "sales-img");
        stockImgTwo.getStyle().setWidth("25px");
        spanTwo.add(stockImgTwo);
        spanTwo.getStyle().setBackground("#24C9FA");
        H5 salesText = new H5("Total sales amount");
        salesText.addClassName("card-text");
        inlineTwo.add(spanTwo, salesText);
        H2 priceTextTwo = new H2("GH 4,700");
        priceTextTwo.addClassName("price-text");
        Button detailsTwo = new Button("show details");
        detailsTwo.addClassName("details-btn");

        Image stockImgThree = new Image("images/number-of-purchase.png", "purchase-img");
        stockImgThree.getStyle().setWidth("25px");
        spanThree.add(stockImgThree);
        spanThree.getStyle().setBackground("#E86A6A");
        H5 purchaseText = new H5("Number of purchase");
        purchaseText.addClassName("card-text");
        inlineThree.add(spanThree, purchaseText);
        H2 priceTextThree = new H2("35");
        priceTextThree.addClassName("price-text");
        Button detailsThree = new Button("show details");
        detailsThree.addClassName("details-btn");

        Image stockImgFour = new Image("images/total purchase.png", "purchase-img");
        stockImgFour.getStyle().setWidth("25px");
        spanFour.add(stockImgFour);
        spanFour.getStyle().setBackground("#4EBE6D");
        H5 amountText = new H5("Total purchase amount");
        amountText.addClassName("card-text");
        inlineFour.add(spanFour, amountText);
        H2 priceTextFour = new H2("GH 700");
        priceTextFour.addClassName("price-text");
        Button detailsFour = new Button("show details");
        detailsFour.addClassName("details-btn");

        H3 productText = new H3("Products");
        productText.addClassName("card-text");
        productText.getStyle().setFontSize("20px");
        productText.getStyle().setFontWeight("700");

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

        cardItem.add(inline, priceText, details);
        cardItemTwo.add(inlineTwo, priceTextTwo, detailsTwo);
        cardItemThree.add(inlineThree, priceTextThree, detailsThree);
        cardItemFour.add(inlineFour, priceTextFour, detailsFour);
        cards.add(cardItem, cardItemTwo, cardItemThree, cardItemFour);
        wrapper.add(medicineName, medicinePrice, medicineCategory, medicineTotalPurchase, medicineTotalQuantity);
        productsTable.add(productText, wrapper);
        productsContainer.add(productsTable);
        dashboardContent.add(cards, productsContainer);
        add(dashboardContent);
    }

}
