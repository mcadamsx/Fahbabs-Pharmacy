package com.example.application.views;

import com.example.application.views.about.AddMedicine;
import com.example.application.views.category.Category;
import com.example.application.views.dispense.Dispense;
import com.example.application.views.helloworld.Dashboard;
import com.example.application.views.product.Product;
import com.example.application.views.purchase.Purchase;
import com.example.application.views.record.Record;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.html.Footer;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Header;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.Scroller;
import com.vaadin.flow.component.sidenav.SideNav;
import com.vaadin.flow.component.sidenav.SideNavItem;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.theme.lumo.LumoUtility;
import org.vaadin.lineawesome.LineAwesomeIcon;

/**
 * The main view is a top-level placeholder for other views.
 */
public class MainLayout extends AppLayout {

    private H2 viewTitle;

    public MainLayout() {
        setPrimarySection(Section.DRAWER);
        addDrawerContent();
        addHeaderContent();
    }

    private void addHeaderContent() {
        DrawerToggle toggle = new DrawerToggle();
        toggle.setAriaLabel("Menu toggle");

        viewTitle = new H2();
        viewTitle.addClassNames(LumoUtility.FontSize.LARGE, LumoUtility.Margin.NONE);

        addToNavbar(true, toggle, viewTitle);
    }

    private void addDrawerContent() {
        H1 appName = new H1("Fahbabs Pharmacy");
        appName.addClassName("title");
        Header header = new Header(appName);

        Scroller scroller = new Scroller(createNavigation());

        addToDrawer(header, scroller, createFooter());
    }

    private SideNav createNavigation() {
        SideNav nav = new SideNav();
        nav.addClassName("nav-list");

        nav.addItem(new SideNavItem("Dashboard", Dashboard.class, LineAwesomeIcon.GLOBE_SOLID.create()));
        nav.addItem(new SideNavItem("Add Medicine", AddMedicine.class, LineAwesomeIcon.PLUS_SOLID.create()));
        nav.addItem(new SideNavItem("Category", Category.class, VaadinIcon.LIST.create()));
        nav.addItem(new SideNavItem("Products", Product.class, VaadinIcon.STORAGE.create()));
        nav.addItem(new SideNavItem("Purchase", Purchase.class, VaadinIcon.CART.create()));
        nav.addItem(new SideNavItem("Records", Record.class, VaadinIcon.DATABASE.create()));
        nav.addItem(new SideNavItem("Dispense", Dispense.class, VaadinIcon.MONEY.create()));
        return nav;
    }

    private Footer createFooter() {

        return new Footer();
    }

    @Override
    protected void afterNavigation() {
        super.afterNavigation();
        viewTitle.setText(getCurrentPageTitle());
    }

    private String getCurrentPageTitle() {
        PageTitle title = getContent().getClass().getAnnotation(PageTitle.class);
        return title == null ? "" : title.value();
    }
}
