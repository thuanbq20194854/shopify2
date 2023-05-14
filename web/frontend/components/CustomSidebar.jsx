import React from "react";
import "../assets/styles.css";
import { useNavigate } from "@shopify/app-bridge-react";
import { Icon, Link } from "@shopify/polaris";
import {
  HomeMajor,
  MarketingMajor,
  CashDollarMajor,
  ComposeMajor,
  ProductCostMajor,
  TaxMajor,
  PinMajor,
  InventoryMajor,
  ShipmentMajor,
  TitleMinor,
  SandboxMajor,
  ExistingInventoryMajor,
  NoteMajor,
  BankMajor,
} from "@shopify/polaris-icons";

export default function CustomSidebar() {
  const navigate = useNavigate();
  return (
    <>
      <div class="sidebar">
        <div class="sidebar-top">
          <Icon source={HomeMajor} color="subdued" />
        </div>
        <div class="sidebar-center">
          <ul class="list">
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={MarketingMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Product SEO
                  </Link>
                </span>
              </div>
            </li>
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={CashDollarMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Price
                  </Link>
                </span>
              </div>
            </li>
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={ComposeMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Compared
                  </Link>
                </span>
              </div>
            </li>

            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={ProductCostMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Cost
                  </Link>
                </span>
              </div>
            </li>
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={TaxMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Tax
                  </Link>
                </span>
              </div>
            </li>
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={PinMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    SKU & Barcode
                  </Link>
                </span>
              </div>
            </li>
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={InventoryMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Inventory
                  </Link>
                </span>
              </div>
            </li>
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={ShipmentMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Shipping
                  </Link>
                </span>
              </div>
            </li>
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={TitleMinor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Title
                  </Link>
                </span>
              </div>
            </li>
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={SandboxMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Description
                  </Link>
                </span>
              </div>
            </li>
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={ExistingInventoryMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Product Type
                  </Link>
                </span>
              </div>
            </li>
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={NoteMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Tag
                  </Link>
                </span>
              </div>
            </li>
            <li class="list-item">
              <div class="pedro">
                {" "}
                <Icon source={BankMajor} color="subdued" />
                <span class="pedro1">
                  <Link
                    removeUnderline
                    monochrome
                    onClick={() => {
                      navigate(
                        "https://thuanhehestore.myshopify.com/admin/apps/ytb-2/pagename"
                      );
                    }}
                  >
                    Vendor
                  </Link>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
