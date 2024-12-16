"use strict";
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [5502, 6732],
  {
    41407: (e, t, o) => {
      o.d(t, { U: () => w, e: () => h });
      var a = o(69307),
        c = o(87608),
        n = o.n(c),
        r = o(10130),
        l = o(76292),
        s = o.n(l),
        i = o(7862),
        m = o.n(i),
        d = o(86020),
        u = o(55609),
        p = o(92819);
      class _ extends a.Component {
        render() {
          const {
              className: e,
              hasAction: t,
              hasDate: o,
              hasSubtitle: c,
              lines: r,
            } = this.props,
            l = n()("woocommerce-activity-card is-loading", e);
          return (0, a.createElement)(
            "div",
            { className: l, "aria-hidden": !0 },
            (0, a.createElement)(
              "span",
              { className: "woocommerce-activity-card__icon" },
              (0, a.createElement)("span", { className: "is-placeholder" })
            ),
            (0, a.createElement)(
              "div",
              { className: "woocommerce-activity-card__header" },
              (0, a.createElement)("div", {
                className: "woocommerce-activity-card__title is-placeholder",
              }),
              c &&
                (0, a.createElement)("div", {
                  className:
                    "woocommerce-activity-card__subtitle is-placeholder",
                }),
              o &&
                (0, a.createElement)(
                  "div",
                  { className: "woocommerce-activity-card__date" },
                  (0, a.createElement)("span", { className: "is-placeholder" })
                )
            ),
            (0, a.createElement)(
              "div",
              { className: "woocommerce-activity-card__body" },
              (0, p.range)(r).map((e) =>
                (0, a.createElement)("span", {
                  className: "is-placeholder",
                  key: e,
                })
              )
            ),
            t &&
              (0, a.createElement)(
                "div",
                { className: "woocommerce-activity-card__actions" },
                (0, a.createElement)("span", { className: "is-placeholder" })
              )
          );
        }
      }
      (_.propTypes = {
        className: m().string,
        hasAction: m().bool,
        hasDate: m().bool,
        hasSubtitle: m().bool,
        lines: m().number,
      }),
        (_.defaultProps = {
          hasAction: !1,
          hasDate: !1,
          hasSubtitle: !1,
          lines: 1,
        });
      const h = _;
      class w extends a.Component {
        getCard() {
          const {
              actions: e,
              className: t,
              children: o,
              date: c,
              icon: r,
              subtitle: l,
              title: i,
              unread: m,
            } = this.props,
            u = n()("woocommerce-activity-card", t),
            p = Array.isArray(e) ? e : [e],
            _ = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(c)
              ? s().utc(c).fromNow()
              : c;
          return (0, a.createElement)(
            "section",
            { className: u },
            m &&
              (0, a.createElement)("span", {
                className: "woocommerce-activity-card__unread",
              }),
            r &&
              (0, a.createElement)(
                "span",
                {
                  className: "woocommerce-activity-card__icon",
                  "aria-hidden": !0,
                },
                r
              ),
            i &&
              (0, a.createElement)(
                "header",
                { className: "woocommerce-activity-card__header" },
                (0, a.createElement)(
                  d.H,
                  { className: "woocommerce-activity-card__title" },
                  i
                ),
                l &&
                  (0, a.createElement)(
                    "div",
                    { className: "woocommerce-activity-card__subtitle" },
                    l
                  ),
                _ &&
                  (0, a.createElement)(
                    "span",
                    { className: "woocommerce-activity-card__date" },
                    _
                  )
              ),
            o &&
              (0, a.createElement)(
                d.Section,
                { className: "woocommerce-activity-card__body" },
                o
              ),
            e &&
              (0, a.createElement)(
                "footer",
                { className: "woocommerce-activity-card__actions" },
                p.map((e, t) => (0, a.cloneElement)(e, { key: t }))
              )
          );
        }
        render() {
          const { onClick: e } = this.props;
          return e
            ? (0, a.createElement)(
                u.Button,
                { className: "woocommerce-activity-card__button", onClick: e },
                this.getCard()
              )
            : this.getCard();
        }
      }
      (w.propTypes = {
        actions: m().oneOfType([m().arrayOf(m().element), m().element]),
        onClick: m().func,
        className: m().string,
        children: m().node,
        date: m().string,
        icon: m().node,
        subtitle: m().node,
        title: m().oneOfType([m().string, m().node]),
        unread: m().bool,
      }),
        (w.defaultProps = {
          icon: (0, a.createElement)(r.Z, { size: 48 }),
          unread: !1,
        });
    },
    3185: (e, t, o) => {
      o.d(t, { Z: () => d });
      var a = o(69307),
        c = o(87608),
        n = o.n(c),
        r = o(7862),
        l = o.n(r),
        s = o(14812),
        i = o(86020);
      class m extends a.Component {
        render() {
          const {
              className: e,
              menu: t,
              subtitle: o,
              title: c,
              unreadMessages: r,
            } = this.props,
            l = n()(
              {
                "woocommerce-layout__inbox-panel-header": o,
                "woocommerce-layout__activity-panel-header": !o,
              },
              e
            ),
            i = r || 0;
          return (0, a.createElement)(
            "div",
            { className: l },
            (0, a.createElement)(
              "div",
              { className: "woocommerce-layout__inbox-title" },
              (0, a.createElement)(
                s.Text,
                { size: 16, weight: 600, color: "#23282d" },
                c
              ),
              (0, a.createElement)(
                s.Text,
                {
                  variant: "button",
                  weight: "600",
                  size: "14",
                  lineHeight: "20px",
                },
                i > 0 &&
                  (0, a.createElement)(
                    "span",
                    { className: "woocommerce-layout__inbox-badge" },
                    r
                  )
              )
            ),
            (0, a.createElement)(
              "div",
              { className: "woocommerce-layout__inbox-subtitle" },
              o &&
                (0, a.createElement)(
                  s.Text,
                  { variant: "body.small", size: "14", lineHeight: "20px" },
                  o
                )
            ),
            t &&
              (0, a.createElement)(
                "div",
                { className: "woocommerce-layout__activity-panel-header-menu" },
                t
              )
          );
        }
      }
      m.propTypes = {
        className: l().string,
        unreadMessages: l().number,
        title: l().string.isRequired,
        subtitle: l().string,
        menu: l().shape({ type: l().oneOf([i.EllipsisMenu]) }),
      };
      const d = m;
    },
    16422: (e, t, o) => {
      o.r(t),
        o.d(t, {
          HelpPanel: () => y,
          SETUP_TASK_HELP_ITEMS_FILTER: () => E,
          default: () => k,
        });
      var a = o(69307),
        c = o(65736),
        n = o(14812),
        r = o(9818),
        l = o(92694),
        s = o(23374),
        i = o(89015),
        m = o(83619),
        d = o(92819),
        u = o(86020),
        p = o(67221),
        _ = o(2031),
        h = o(14599),
        w = o(3185),
        g = o(75781);
      const E = "woocommerce_admin_setup_task_help_items";
      function v(e, t) {
        const { taskName: o } = e;
        t &&
          e.recordEvent("help_panel_click", {
            task_name: o || "homescreen",
            link: t.currentTarget.href,
          });
      }
      const y = (e) => {
        const { taskName: t } = e;
        (0, a.useEffect)(() => {
          e.recordEvent("help_panel_open", { task_name: t || "homescreen" });
        }, [t]);
        const o = (function (e) {
          const t = (function (e) {
              const { taskName: t } = e;
              switch (t) {
                case "products":
                  return [
                    {
                      title: (0, c.__)(
                        "Adding and Managing Products",
                        "woocommerce"
                      ),
                      link: "https://woocommerce.com/document/managing-products/?utm_source=help_panel&utm_medium=product",
                    },
                    {
                      title: (0, c.__)(
                        "Import products using the CSV Importer and Exporter",
                        "woocommerce"
                      ),
                      link: "https://woocommerce.com/document/product-csv-importer-exporter/?utm_source=help_panel&utm_medium=product",
                    },
                    {
                      title: (0, c.__)(
                        "Migrate products using Cart2Cart",
                        "woocommerce"
                      ),
                      link: "https://woocommerce.com/products/cart2cart/?utm_source=help_panel&utm_medium=product",
                    },
                    {
                      title: (0, c.__)(
                        "Learn more about setting up products",
                        "woocommerce"
                      ),
                      link: "https://woocommerce.com/documentation/plugins/woocommerce/getting-started/setup-products/?utm_source=help_panel&utm_medium=product",
                    },
                  ];
                case "appearance":
                  return [
                    {
                      title: (0, c.__)(
                        "Showcase your products and tailor your shopping experience using Blocks",
                        "woocommerce"
                      ),
                      link: "https://woocommerce.com/document/woocommerce-blocks/?utm_source=help_panel&utm_medium=product",
                    },
                    {
                      title: (0, c.__)(
                        "Manage Store Notice, Catalog View and Product Images",
                        "woocommerce"
                      ),
                      link: "https://woocommerce.com/document/woocommerce-customizer/?utm_source=help_panel&utm_medium=product",
                    },
                    {
                      title: (0, c.__)(
                        "How to choose and change a theme",
                        "woocommerce"
                      ),
                      link: "https://woocommerce.com/document/choose-change-theme/?utm_source=help_panel&utm_medium=product",
                    },
                  ];
                case "shipping":
                  return (function ({ activePlugins: e, countryCode: t }) {
                    const o = "US" === t && !e.includes("woocommerce-services");
                    return [
                      {
                        title: (0, c.__)(
                          "Setting up Shipping Zones",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/setting-up-shipping-zones/?utm_source=help_panel&utm_medium=product",
                      },
                      {
                        title: (0, c.__)(
                          "Core Shipping Options",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/documentation/plugins/woocommerce/getting-started/shipping/core-shipping-options/?utm_source=help_panel&utm_medium=product",
                      },
                      {
                        title: (0, c.__)(
                          "Product Shipping Classes",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/product-shipping-classes/?utm_source=help_panel&utm_medium=product",
                      },
                      o && {
                        title: (0, c.__)(
                          "WooCommerce Shipping setup and configuration",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/woocommerce-shipping-and-tax/?utm_source=help_panel&utm_medium=product#section-3",
                      },
                      {
                        title: (0, c.__)(
                          "Learn more about configuring your shipping settings",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/plugins/woocommerce/getting-started/shipping/?utm_source=help_panel&utm_medium=product",
                      },
                    ].filter(Boolean);
                  })(e);
                case "tax":
                  return (function (e) {
                    const { countryCode: t, taskLists: o } = e,
                      a = o
                        .reduce((e, t) => [...e, ...t.tasks], [])
                        .find((e) => "tax" === e.id);
                    if (!a) return;
                    const { additionalData: n } = a,
                      { woocommerceTaxCountries: r = [], taxJarActivated: l } =
                        n,
                      s = !l && r.includes(t);
                    return [
                      {
                        title: (0, c.__)(
                          "Setting up Taxes in WooCommerce",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/setting-up-taxes-in-woocommerce/?utm_source=help_panel&utm_medium=product",
                      },
                      s && {
                        title: (0, c.__)(
                          "Automated Tax calculation using WooCommerce Tax",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/woocommerce-services/?utm_source=help_panel&utm_medium=product#section-10",
                      },
                    ].filter(Boolean);
                  })(e);
                case "payments":
                  return (function (e) {
                    const { paymentGatewaySuggestions: t } = e;
                    return [
                      {
                        title: (0, c.__)(
                          "Which Payment Option is Right for Me?",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/premium-payment-gateway-extensions/?utm_source=help_panel&utm_medium=product",
                      },
                      t.woocommerce_payments && {
                        title: (0, c.__)(
                          "WooPayments Start Up Guide",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/payments/?utm_source=help_panel&utm_medium=product",
                      },
                      t.woocommerce_payments && {
                        title: (0, c.__)("WooPayments FAQs", "woocommerce"),
                        link: "https://woocommerce.com/documentation/woocommerce-payments/woocommerce-payments-faqs/?utm_source=help_panel&utm_medium=product",
                      },
                      t.stripe && {
                        title: (0, c.__)(
                          "Stripe Setup and Configuration",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/stripe/?utm_source=help_panel&utm_medium=product",
                      },
                      t["ppcp-gateway"] && {
                        title: (0, c.__)(
                          "PayPal Checkout Setup and Configuration",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/2-0/woocommerce-paypal-payments/?utm_medium=product#section-3",
                      },
                      t.square_credit_card && {
                        title: (0, c.__)("Square - Get started", "woocommerce"),
                        link: "https://woocommerce.com/document/woocommerce-square/?utm_source=help_panel&utm_medium=product",
                      },
                      t.kco && {
                        title: (0, c.__)(
                          "Klarna - Introduction",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/klarna-checkout/?utm_source=help_panel&utm_medium=product",
                      },
                      t.klarna_payments && {
                        title: (0, c.__)(
                          "Klarna - Introduction",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/klarna-payments/?utm_source=help_panel&utm_medium=product",
                      },
                      t.payfast && {
                        title: (0, c.__)(
                          "Payfast Setup and Configuration",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/payfast-payment-gateway/?utm_source=help_panel&utm_medium=product",
                      },
                      t.eway && {
                        title: (0, c.__)(
                          "Eway Setup and Configuration",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/eway/?utm_source=help_panel&utm_medium=product",
                      },
                      {
                        title: (0, c.__)(
                          "Direct Bank Transfer (BACS)",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/bacs/?utm_source=help_panel&utm_medium=product",
                      },
                      {
                        title: (0, c.__)("Cash on Delivery", "woocommerce"),
                        link: "https://woocommerce.com/document/cash-on-delivery/?utm_source=help_panel&utm_medium=product",
                      },
                    ].filter(Boolean);
                  })(e);
                case "marketing":
                  return (function (e) {
                    const { activePlugins: t } = e;
                    return [
                      t.includes("mailpoet") && {
                        title: (0, c.__)(
                          "Get started with Mailpoet",
                          "woocommerce"
                        ),
                        link: "https://kb.mailpoet.com/category/114-getting-started",
                      },
                      t.includes("google-listings-and-ads") && {
                        title: (0, c.__)(
                          "Set up Google Listing & Ads",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/document/google-listings-and-ads/?utm_medium=product#get-started",
                      },
                      t.includes("pinterest-for-woocommerce") && {
                        title: (0, c.__)(
                          "Set up Pinterest for WooCommerce",
                          "woocommerce"
                        ),
                        link: "https://woocommerce.com/products/pinterest-for-woocommerce/",
                      },
                      t.includes("mailchimp-for-woocommerce") && {
                        title: (0, c.__)(
                          "Connect Mailchimp for WooCommerce",
                          "woocommerce"
                        ),
                        link: "https://mailchimp.com/help/connect-or-disconnect-mailchimp-for-woocommerce/",
                      },
                      t.includes("creative-mail-by-constant-contact") && {
                        title: (0, c.__)(
                          "Set up Creative Mail for WooCommerce",
                          "woocommerce"
                        ),
                        link: "https://app.creativemail.com/kb/help/WooCommerce",
                      },
                    ].filter(Boolean);
                  })(e);
                default:
                  return [
                    {
                      title: (0, c.__)("Get Support", "woocommerce"),
                      link: "https://woocommerce.com/my-account/create-a-ticket/?utm_medium=product",
                    },
                    {
                      title: (0, c.__)("Home Screen", "woocommerce"),
                      link: "https://woocommerce.com/document/home-screen/?utm_medium=product",
                    },
                    {
                      title: (0, c.__)("Inbox", "woocommerce"),
                      link: "https://woocommerce.com/document/home-screen/?utm_medium=product#section-4",
                    },
                    {
                      title: (0, c.__)("Stats Overview", "woocommerce"),
                      link: "https://woocommerce.com/document/home-screen/?utm_medium=product#section-5",
                    },
                    {
                      title: (0, c.__)("Store Management", "woocommerce"),
                      link: "https://woocommerce.com/document/home-screen/?utm_medium=product#section-10",
                    },
                    {
                      title: (0, c.__)("Store Setup Checklist", "woocommerce"),
                      link: "https://woocommerce.com/document/woocommerce-setup-wizard?utm_medium=product#store-setup-checklist",
                    },
                  ];
              }
            })(e),
            o = {
              title: (0, c.__)("WooCommerce Docs", "woocommerce"),
              link: "https://woocommerce.com/documentation/?utm_source=help_panel&utm_medium=product",
            };
          t.push(o);
          const r = (0, l.applyFilters)(E, t, e.taskName, e);
          let u = Array.isArray(r)
            ? r.filter((e) => e instanceof Object && e.title && e.link)
            : [];
          u.length || (u = [o]);
          const p = (0, d.partial)(v, e);
          return u.map((e) => {
            var t, o;
            return {
              title: (0, a.createElement)(
                n.Text,
                {
                  as: "div",
                  variant: "button",
                  weight: "600",
                  size: "14",
                  lineHeight: "20px",
                },
                e.title
              ),
              before: (0, a.createElement)(s.Z, { icon: i.Z }),
              after: (0, a.createElement)(s.Z, { icon: m.Z }),
              linkType:
                null !== (t = e.linkType) && void 0 !== t ? t : "external",
              target: null !== (o = e.target) && void 0 !== o ? o : "_blank",
              href: e.link,
              onClick: p,
            };
          });
        })(e);
        return (0, a.createElement)(
          a.Fragment,
          null,
          (0, a.createElement)(w.Z, {
            title: (0, c.__)("Documentation", "woocommerce"),
          }),
          (0, a.createElement)(
            u.Section,
            null,
            (0, a.createElement)(u.List, {
              items: o,
              className: "woocommerce-quick-links__list",
            })
          )
        );
      };
      y.defaultProps = { recordEvent: h.recordEvent };
      const k = (0, _.qC)(
        (0, r.withSelect)((e) => {
          const { getSettings: t } = e(p.SETTINGS_STORE_NAME),
            { getActivePlugins: o } = e(p.PLUGINS_STORE_NAME),
            { general: a = {} } = t("general"),
            c = o(),
            n = e(p.ONBOARDING_STORE_NAME)
              .getPaymentGatewaySuggestions()
              .reduce((e, t) => {
                const { id: o } = t;
                return (e[o] = !0), e;
              }, {}),
            r = e(p.ONBOARDING_STORE_NAME).getTaskLists();
          return {
            activePlugins: c,
            countryCode: (0, g.so)(a.woocommerce_default_country),
            paymentGatewaySuggestions: n,
            taskLists: r,
          };
        })
      )(y);
    },
    18667: (e, t, o) => {
      o.d(t, { A: () => u, Z: () => d });
      var a = o(76292),
        c = o.n(a),
        n = o(92819),
        r = o(81921),
        l = o(67221),
        s = o(10431),
        i = o(81595),
        m = o(74617);
      const d = ({
          indicator: e,
          primaryData: t,
          secondaryData: o,
          currency: a,
          formatAmount: c,
          persistedQuery: r,
        }) => {
          const l = (0, n.find)(t.data, (t) => t.stat === e.stat),
            d = (0, n.find)(o.data, (t) => t.stat === e.stat);
          if (!l || !d) return {};
          const u =
              (l._links && l._links.report[0] && l._links.report[0].href) || "",
            p = (function (e, t, o) {
              return e
                ? "/jetpack" === e
                  ? (0, m.getAdminLink)("admin.php?page=jetpack#/dashboard")
                  : (0, s.getNewPath)(t, e, { chart: o.chart })
                : "";
            })(u, r, l),
            _ = "/jetpack" === u ? "wp-admin" : "wc-admin",
            h = "currency" === l.format,
            w = (0, i.calculateDelta)(l.value, d.value);
          return {
            primaryValue: h
              ? c(l.value)
              : (0, i.formatValue)(a, l.format, l.value),
            secondaryValue: h
              ? c(d.value)
              : (0, i.formatValue)(a, d.format, d.value),
            delta: w,
            reportUrl: p,
            reportUrlType: _,
          };
        },
        u = (e, t, o, a) => {
          const {
              getReportItems: n,
              getReportItemsError: s,
              isResolving: i,
            } = e(l.REPORTS_STORE_NAME),
            { woocommerce_default_date_range: m } = e(
              l.SETTINGS_STORE_NAME
            ).getSetting("wc_admin", "wcAdminSettings"),
            d = (0, r.getCurrentDates)(o, m),
            u = d.primary.before,
            p = d.secondary.before,
            _ = t.map((e) => e.stat).join(","),
            h = (0, l.getFilterQuery)({ filters: a, query: o }),
            w = {
              ...h,
              after: (0, r.appendTimestamp)(d.primary.after, "start"),
              before: (0, r.appendTimestamp)(
                u,
                u.isSame(c()(), "day") ? "now" : "end"
              ),
              stats: _,
            },
            g = {
              ...h,
              after: (0, r.appendTimestamp)(d.secondary.after, "start"),
              before: (0, r.appendTimestamp)(
                p,
                p.isSame(c()(), "day") ? "now" : "end"
              ),
              stats: _,
            };
          return {
            primaryData: n("performance-indicators", w),
            primaryError: s("performance-indicators", w) || null,
            primaryRequesting: i("getReportItems", [
              "performance-indicators",
              w,
            ]),
            secondaryData: n("performance-indicators", g),
            secondaryError: s("performance-indicators", g) || null,
            secondaryRequesting: i("getReportItems", [
              "performance-indicators",
              g,
            ]),
            defaultDateRange: m,
          };
        };
    },
    44496: (e, t, o) => {
      o.r(t), o.d(t, { default: () => vt });
      var a = o(69307),
        c = o(94333),
        n = o(9818),
        r = o(67221),
        l = o(10431),
        s = o(87608),
        i = o.n(s),
        m = o(7862),
        d = o.n(m),
        u = o(65736),
        p = o(3185),
        _ = o(86020),
        h = o(55609),
        w = o(14599),
        g = o(92819),
        E = o(25202),
        v = o(22629),
        y = o(76357),
        k = o(74617),
        f = o(17844),
        b = o(41407),
        N = o(61935);
      function S(e) {
        (0, w.recordEvent)(`activity_panel_orders_${e}`, {});
      }
      function C({ unreadOrdersCount: e, orderStatuses: t }) {
        const o = (0, a.useMemo)(
            () => ({
              page: 1,
              per_page: 5,
              status: t,
              _fields: [
                "id",
                "number",
                "currency",
                "status",
                "total",
                "customer",
                "line_items",
                "customer_id",
                "date_created_gmt",
              ],
            }),
            [t]
          ),
          c = (0, a.useContext)(f.CurrencyContext),
          s = c.getCurrencyConfig(),
          { currencySymbols: i = {} } = (0, N.O3)("onboarding", {}),
          {
            orders: m = [],
            isRequesting: d,
            isError: p,
            customerItems: h,
          } = (0, n.useSelect)((a) => {
            const {
                getOrders: c,
                hasFinishedResolution: n,
                getOrdersError: l,
              } = a(r.ORDERS_STORE_NAME),
              { getItems: s } = a(r.ITEMS_STORE_NAME);
            if (!t.length && 0 === e) return { isRequesting: !1 };
            const i = c(o, null),
              m = n("getOrders", [o]);
            if (m || null === e || null === i)
              return {
                isError: Boolean(l(o)),
                isRequesting: !0,
                orderStatuses: t,
              };
            const d = s("customers", {
              users: i.map((e) => e.customer_id).filter((e) => 0 !== e),
              _fields: ["id", "name", "country", "user_id"],
            });
            return {
              orders: i,
              isError: Boolean(l(i)),
              isRequesting: m,
              orderStatuses: t,
              customerItems: d,
            };
          });
        if (p) {
          if (!t.length && window.wcAdminFeatures.analytics)
            return (0, a.createElement)(_.EmptyContent, {
              title: (0, u.__)(
                "You currently don't have any actionable statuses. To display orders here, select orders that require further review in settings.",
                "woocommerce"
              ),
              actionLabel: (0, u.__)("Settings", "woocommerce"),
              actionURL: (0, k.getAdminLink)(
                "admin.php?page=wc-admin&path=/analytics/settings"
              ),
            });
          const e = (0, u.__)(
              "There was an error getting your orders. Please try again.",
              "woocommerce"
            ),
            o = (0, u.__)("Reload", "woocommerce"),
            c = () => {
              window.location.reload();
            };
          return (0, a.createElement)(
            a.Fragment,
            null,
            (0, a.createElement)(_.EmptyContent, {
              title: e,
              actionLabel: o,
              actionURL: null,
              actionCallback: c,
            })
          );
        }
        const w = h ? Array.from(h, ([, e]) => e) : [];
        return (0, a.createElement)(
          a.Fragment,
          null,
          (0, a.createElement)(
            _.Section,
            null,
            d
              ? (0, a.createElement)(b.e, {
                  className: "woocommerce-order-activity-card",
                  hasAction: !0,
                  hasDate: !0,
                  lines: 1,
                })
              : (function (e, t, o) {
                  if (0 === e.length)
                    return (0, a.createElement)(
                      a.Fragment,
                      null,
                      (0, a.createElement)(
                        b.U,
                        {
                          className: "woocommerce-empty-activity-card",
                          title: "",
                          icon: "",
                        },
                        (0, a.createElement)(
                          "span",
                          {
                            className: "woocommerce-order-empty__success-icon",
                            role: "img",
                            "aria-labelledby":
                              "woocommerce-order-empty-message",
                          },
                          "🎉"
                        ),
                        (0, a.createElement)(
                          _.H,
                          { id: "woocommerce-order-empty-message" },
                          (0, u.__)(
                            "You’ve fulfilled all your orders",
                            "woocommerce"
                          )
                        )
                      ),
                      (0, a.createElement)(
                        _.Link,
                        {
                          href: "edit.php?post_type=shop_order",
                          onClick: () => S("orders_manage"),
                          className:
                            "woocommerce-layout__activity-panel-outbound-link woocommerce-layout__activity-panel-empty",
                          type: "wp-admin",
                        },
                        (0, u.__)("Manage all orders", "woocommerce")
                      )
                    );
                  const c = (e) => {
                      const { name: t } = e || {};
                      return t ? `{{customerLink}}${t}{{/customerLink}}` : "";
                    },
                    n = (e) => {
                      const { id: o, number: n, customer_id: r } = e,
                        s = t.find((e) => e.user_id === r) || {};
                      let i = null;
                      return (
                        s &&
                          s.id &&
                          (i = window.wcAdminFeatures.analytics
                            ? (0, l.getNewPath)({}, "/analytics/customers", {
                                filter: "single_customer",
                                customers: s.id,
                              })
                            : (0, k.getAdminLink)(
                                "user-edit.php?user_id=" + s.id
                              )),
                        (0, a.createElement)(
                          a.Fragment,
                          null,
                          (0, y.Z)({
                            mixedString: (0, u.sprintf)(
                              (0, u.__)(
                                "{{orderLink}}Order #%(orderNumber)s{{/orderLink}} %(customerString)s",
                                "woocommerce"
                              ),
                              { orderNumber: n, customerString: c(s) }
                            ),
                            components: {
                              orderLink: (0, a.createElement)(_.Link, {
                                href: (0, k.getAdminLink)(
                                  "post.php?action=edit&post=" + o
                                ),
                                onClick: () => S("order_number"),
                                type: "wp-admin",
                              }),
                              destinationFlag:
                                s && s.country
                                  ? (0, a.createElement)(_.Flag, {
                                      code: s && s.country,
                                      round: !1,
                                    })
                                  : null,
                              customerLink: i
                                ? (0, a.createElement)(_.Link, {
                                    href: i,
                                    onClick: () => S("customer_name"),
                                    type: "wc-admin",
                                  })
                                : (0, a.createElement)("span", null),
                            },
                          })
                        )
                      );
                    },
                    r = [];
                  return (
                    e.forEach((e) => {
                      const { date_created_gmt: t, line_items: c, id: l } = e,
                        s = c ? c.length : 0;
                      r.push(
                        (0, a.createElement)(
                          b.U,
                          {
                            key: l,
                            className: "woocommerce-order-activity-card",
                            title: n(e),
                            date: t,
                            onClick: ({ target: e }) => {
                              S("orders_begin_fulfillment"),
                                e.href ||
                                  (window.location.href = (0, k.getAdminLink)(
                                    `post.php?action=edit&post=${l}`
                                  ));
                            },
                            subtitle: (0, a.createElement)(
                              "div",
                              null,
                              (0, a.createElement)(
                                "span",
                                null,
                                (0, u.sprintf)(
                                  (0, u._n)(
                                    "%d product",
                                    "%d products",
                                    s,
                                    "woocommerce"
                                  ),
                                  s
                                )
                              ),
                              (0, a.createElement)(
                                "span",
                                null,
                                o(e.total, e.currency)
                              )
                            ),
                          },
                          (0, a.createElement)(_.OrderStatus, {
                            order: e,
                            orderStatusMap: (0, N.O3)("orderStatuses", {}),
                          })
                        )
                      );
                    }),
                    (0, a.createElement)(
                      a.Fragment,
                      null,
                      r,
                      (0, a.createElement)(
                        _.Link,
                        {
                          href: "edit.php?post_type=shop_order",
                          className:
                            "woocommerce-layout__activity-panel-outbound-link",
                          onClick: () => S("orders_manage"),
                          type: "wp-admin",
                        },
                        (0, u.__)("Manage all orders", "woocommerce")
                      )
                    )
                  );
                })(m, w, (e, t) => {
                  if (!t) return null;
                  if (s && s.code === t) return c.formatAmount(e);
                  const o = i[t];
                  return o
                    ? (0, f.CurrencyFactory)({
                        ...s,
                        symbol: (0, v.decodeEntities)(o),
                        code: t,
                      }).formatAmount(e)
                    : `${t}${e}`;
                })
          )
        );
      }
      (C.propTypes = {
        isError: d().bool,
        isRequesting: d().bool,
        unreadOrdersCount: d().number,
        orders: d().array.isRequired,
        orderStatuses: d().array,
      }),
        (C.defaultProps = { orders: [], isError: !1, isRequesting: !1 });
      const M = C;
      var T = o(39630),
        z = o(76292),
        R = o.n(z);
      class A extends a.Component {
        constructor(e) {
          super(e),
            (this.state = {
              quantity: e.product.stock_quantity,
              editing: !1,
              edited: !1,
            }),
            (this.beginEdit = this.beginEdit.bind(this)),
            (this.cancelEdit = this.cancelEdit.bind(this)),
            (this.onQuantityChange = this.onQuantityChange.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.onSubmit = this.onSubmit.bind(this));
        }
        recordStockEvent(e, t = {}) {
          (0, w.recordEvent)(`activity_panel_stock_${e}`, t);
        }
        beginEdit() {
          const { product: e } = this.props;
          this.setState({ editing: !0, quantity: e.stock_quantity }, () => {
            this.quantityInput && this.quantityInput.focus();
          }),
            this.recordStockEvent("update_stock");
        }
        cancelEdit() {
          const { product: e } = this.props;
          this.setState({ editing: !1, quantity: e.stock_quantity }),
            this.recordStockEvent("cancel");
        }
        handleKeyDown(e) {
          e.keyCode === T.ESCAPE && this.cancelEdit();
        }
        onQuantityChange(e) {
          this.setState({ quantity: e.target.value });
        }
        async onSubmit() {
          const {
              product: e,
              updateProductStock: t,
              createNotice: o,
            } = this.props,
            a = parseInt(this.state.quantity, 10);
          e.stock_quantity !== a
            ? (this.setState({ editing: !1, edited: !0 }),
              (await t(e, a))
                ? o(
                    "success",
                    (0, u.sprintf)(
                      (0, u.__)("%s stock updated", "woocommerce"),
                      e.name
                    ),
                    {
                      actions: [
                        {
                          label: (0, u.__)("Undo", "woocommerce"),
                          onClick: () => {
                            t(e, e.stock_quantity),
                              this.recordStockEvent("undo");
                          },
                        },
                      ],
                    }
                  )
                : o(
                    "error",
                    (0, u.sprintf)(
                      (0, u.__)("%s stock could not be updated", "woocommerce"),
                      e.name
                    )
                  ),
              this.recordStockEvent("save", { quantity: a }))
            : this.setState({ editing: !1 });
        }
        getActions() {
          const { editing: e } = this.state;
          return e
            ? [
                (0, a.createElement)(
                  h.Button,
                  { key: "save", type: "submit", isPrimary: !0 },
                  (0, u.__)("Save", "woocommerce")
                ),
                (0, a.createElement)(
                  h.Button,
                  { key: "cancel", type: "reset" },
                  (0, u.__)("Cancel", "woocommerce")
                ),
              ]
            : [
                (0, a.createElement)(
                  h.Button,
                  { key: "update", isSecondary: !0, onClick: this.beginEdit },
                  (0, u.__)("Update stock", "woocommerce")
                ),
              ];
        }
        getBody() {
          const { product: e } = this.props,
            { editing: t, quantity: o } = this.state;
          return t
            ? (0, a.createElement)(
                a.Fragment,
                null,
                (0, a.createElement)(
                  h.BaseControl,
                  {
                    className: "woocommerce-stock-activity-card__edit-quantity",
                  },
                  (0, a.createElement)("input", {
                    className: "components-text-control__input",
                    type: "number",
                    value: o,
                    onKeyDown: this.handleKeyDown,
                    onChange: this.onQuantityChange,
                    ref: (e) => {
                      this.quantityInput = e;
                    },
                  })
                ),
                (0, a.createElement)(
                  "span",
                  null,
                  (0, u.__)("in stock", "woocommerce")
                )
              )
            : (0, a.createElement)(
                "span",
                {
                  className: i()(
                    "woocommerce-stock-activity-card__stock-quantity",
                    { "out-of-stock": e.stock_quantity < 1 }
                  ),
                },
                (0, u.sprintf)(
                  (0, u.__)("%d in stock", "woocommerce"),
                  e.stock_quantity
                )
              );
        }
        render() {
          const { product: e } = this.props,
            { edited: t, editing: o } = this.state,
            c = (0, N.O3)("notifyLowStockAmount", 0),
            n = Number.isFinite(e.low_stock_amount) ? e.low_stock_amount : c,
            r = e.stock_quantity <= n,
            l = e.last_order_date
              ? (0, u.sprintf)(
                  (0, u.__)("Last ordered %s", "woocommerce"),
                  R().utc(e.last_order_date).fromNow()
                )
              : null;
          if (!r && !t) return null;
          const s = (0, a.createElement)(
            _.Link,
            {
              href: "post.php?action=edit&post=" + (e.parent_id || e.id),
              onClick: () => this.recordStockEvent("product_name"),
              type: "wp-admin",
            },
            e.name
          );
          let m = null;
          "variation" === e.type &&
            (m = Object.values(e.attributes)
              .map((e) => e.option)
              .join(", "));
          const d = (0, g.get)(e, ["images", 0]) || (0, g.get)(e, ["image"]),
            p = i()("woocommerce-stock-activity-card__image-overlay__product", {
              "is-placeholder": !d || !d.src,
            }),
            h = (0, a.createElement)(
              "div",
              { className: "woocommerce-stock-activity-card__image-overlay" },
              (0, a.createElement)(
                "div",
                { className: p },
                (0, a.createElement)(_.ProductImage, { product: e })
              )
            ),
            w = i()("woocommerce-stock-activity-card", {
              "is-dimmed": !o && !r,
            }),
            E = (0, a.createElement)(
              b.U,
              {
                className: w,
                title: s,
                subtitle: m,
                icon: h,
                date: l,
                actions: this.getActions(),
              },
              this.getBody()
            );
          return o
            ? (0, a.createElement)(
                "form",
                { onReset: this.cancelEdit, onSubmit: this.onSubmit },
                E
              )
            : E;
        }
      }
      const P = {
        page: 1,
        per_page: 5,
        status: "publish",
        _fields: [
          "attributes",
          "id",
          "images",
          "last_order_date",
          "low_stock_amount",
          "name",
          "parent_id",
          "stock_quantity",
          "type",
        ],
      };
      class L extends a.Component {
        constructor(e) {
          super(e), (this.updateStock = this.updateStock.bind(this));
        }
        async updateStock(e, t) {
          const { invalidateResolution: o, updateProductStock: a } = this.props,
            c = await a(e, t);
          return (
            c &&
              (o("getItems", ["products/low-in-stock", P]),
              o("getItemsTotalCount", [
                "products/count-low-in-stock",
                E.Ox,
                null,
              ])),
            c
          );
        }
        renderProducts() {
          const { products: e, createNotice: t } = this.props;
          return e.map((e) =>
            (0, a.createElement)(A, {
              key: e.id,
              product: e,
              updateProductStock: this.updateStock,
              createNotice: t,
            })
          );
        }
        render() {
          const {
            lowStockProductsCount: e,
            isError: t,
            isRequesting: o,
            products: c,
          } = this.props;
          if (t) {
            const e = (0, u.__)(
                "There was an error getting your low stock products. Please try again.",
                "woocommerce"
              ),
              t = (0, u.__)("Reload", "woocommerce"),
              o = () => {
                window.location.reload();
              };
            return (0, a.createElement)(_.EmptyContent, {
              title: e,
              actionLabel: t,
              actionURL: null,
              actionCallback: o,
            });
          }
          if (o || !c.length) {
            const t = Math.min(5, null != e ? e : 1),
              o = Array.from(new Array(t)).map((e, t) =>
                (0, a.createElement)(b.e, {
                  key: t,
                  className: "woocommerce-stock-activity-card",
                  hasAction: !0,
                  lines: 1,
                })
              );
            return (0, a.createElement)(_.Section, null, o);
          }
          return (0, a.createElement)(_.Section, null, this.renderProducts());
        }
      }
      (L.propTypes = {
        lowStockProductsCount: d().number,
        products: d().array.isRequired,
        isError: d().bool,
        isRequesting: d().bool,
      }),
        (L.defaultProps = { products: [], isError: !1, isRequesting: !1 });
      const O = (0, c.compose)(
        (0, n.withSelect)((e) => {
          const {
            getItems: t,
            getItemsError: o,
            isResolving: a,
          } = e(r.ITEMS_STORE_NAME);
          return {
            products: Array.from(t("products/low-in-stock", P).values()),
            isError: Boolean(o("products/low-in-stock", P)),
            isRequesting: a("getItems", ["products/low-in-stock", P]),
          };
        }),
        (0, n.withDispatch)((e) => {
          const { invalidateResolution: t, updateProductStock: o } = e(
              r.ITEMS_STORE_NAME
            ),
            { createNotice: a } = e("core/notices");
          return {
            createNotice: a,
            invalidateResolution: t,
            updateProductStock: o,
          };
        })
      )(L);
      var x = o(28870),
        I = o(41043);
      const F = () =>
        (0, a.createElement)(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          (0, a.createElement)(
            "mask",
            {
              id: "mask0",
              style: "mask-type:alpha",
              maskUnits: "userSpaceOnUse",
              x: "1",
              y: "1",
              width: "14",
              height: "14",
            },
            (0, a.createElement)("path", {
              d: "M7.99992 1.33301C4.31992 1.33301 1.33325 4.31967 1.33325 7.99967C1.33325 11.6797 4.31992 14.6663 7.99992 14.6663C11.6799 14.6663 14.6666 11.6797 14.6666 7.99967C14.6666 4.31967 11.6799 1.33301 7.99992 1.33301ZM7.99992 13.333C5.05992 13.333 2.66659 10.9397 2.66659 7.99967C2.66659 5.05967 5.05992 2.66634 7.99992 2.66634C10.9399 2.66634 13.3333 5.05967 13.3333 7.99967C13.3333 10.9397 10.9399 13.333 7.99992 13.333ZM6.66658 9.44634L11.0599 5.05301L11.9999 5.99967L6.66658 11.333L3.99992 8.66634L4.93992 7.72634L6.66658 9.44634Z",
              fill: "white",
            })
          ),
          (0, a.createElement)(
            "g",
            { mask: "url(#mask0)" },
            (0, a.createElement)("rect", {
              width: "16",
              height: "16",
              fill: "#4AB866",
            })
          )
        );
      var H = o(88502),
        U = o(51671);
      const q = { page: 1, per_page: U.X6, status: "hold", _embed: 1 };
      class D extends a.Component {
        recordReviewEvent(e, t) {
          (0, w.recordEvent)(`reviews_${e}`, t || {});
        }
        deleteReview(e) {
          const {
            deleteReview: t,
            createNotice: o,
            updateReview: a,
            clearReviewsCache: c,
          } = this.props;
          e &&
            t(e)
              .then(() => {
                c(),
                  o(
                    "success",
                    (0, u.__)("Review successfully deleted.", "woocommerce"),
                    {
                      actions: [
                        {
                          label: (0, u.__)("Undo", "woocommerce"),
                          onClick: () => {
                            a(e, { status: "untrash" }, { _embed: 1 }).then(
                              () => c()
                            );
                          },
                        },
                      ],
                    }
                  );
              })
              .catch(() => {
                o(
                  "error",
                  (0, u.__)("Review could not be deleted.", "woocommerce")
                );
              });
        }
        updateReviewStatus(e, t, o) {
          const {
            createNotice: a,
            updateReview: c,
            clearReviewsCache: n,
          } = this.props;
          e &&
            c(e, { status: t })
              .then(() => {
                n(),
                  a(
                    "success",
                    (0, u.__)("Review successfully updated.", "woocommerce"),
                    {
                      actions: [
                        {
                          label: (0, u.__)("Undo", "woocommerce"),
                          onClick: () => {
                            c(e, { status: o }, { _embed: 1 }).then(() => n());
                          },
                        },
                      ],
                    }
                  );
              })
              .catch(() => {
                a(
                  "error",
                  (0, u.__)("Review could not be updated.", "woocommerce")
                );
              });
        }
        renderReview(e) {
          const t =
            (e && e._embedded && e._embedded.up && e._embedded.up[0]) || null;
          if (e.isUpdating)
            return (0, a.createElement)(b.e, {
              key: e.id,
              className: "woocommerce-review-activity-card",
              hasAction: !0,
              hasDate: !0,
              lines: 1,
            });
          if ((0, g.isNull)(t) || e.status !== q.status) return null;
          const o = (0, y.Z)({
              mixedString: (0, u.sprintf)(
                (0, u.__)(
                  "{{authorLink}}%1$s{{/authorLink}}{{verifiedCustomerIcon/}} reviewed {{productLink}}%2$s{{/productLink}}",
                  "woocommerce"
                ),
                e.reviewer,
                t.name
              ),
              components: {
                productLink: (0, a.createElement)(_.Link, {
                  href: t.permalink,
                  onClick: () => this.recordReviewEvent("product"),
                  type: "external",
                }),
                authorLink: (0, a.createElement)(_.Link, {
                  href: (0, k.getAdminLink)(
                    "admin.php?page=wc-admin&path=%2Fcustomers&search=" +
                      e.reviewer
                  ),
                  onClick: () => this.recordReviewEvent("customer"),
                  type: "external",
                }),
                verifiedCustomerIcon: e.verified
                  ? (0, a.createElement)(
                      "span",
                      {
                        className: "woocommerce-review-activity-card__verified",
                      },
                      (0, a.createElement)(
                        h.Tooltip,
                        { text: (0, u.__)("Verified owner", "woocommerce") },
                        (0, a.createElement)(
                          "span",
                          null,
                          (0, a.createElement)(F, null)
                        )
                      )
                    )
                  : null,
              },
            }),
            c = (0, a.createElement)(
              a.Fragment,
              null,
              (0, a.createElement)(_.ReviewRating, {
                review: e,
                icon: I.Z,
                outlineIcon: x.Z,
                size: 13,
              })
            ),
            n = (0, g.get)(t, ["images", 0]) || (0, g.get)(t, ["image"]),
            r = i()(
              "woocommerce-review-activity-card__image-overlay__product",
              { "is-placeholder": !n || !n.src }
            ),
            l = (0, a.createElement)(
              "div",
              { className: "woocommerce-review-activity-card__image-overlay" },
              (0, a.createElement)(
                "div",
                { className: r },
                (0, a.createElement)(_.ProductImage, {
                  product: t,
                  width: 33,
                  height: 33,
                })
              )
            ),
            s = { date: e.date_created_gmt, status: e.status },
            m = [
              (0, a.createElement)(
                h.Button,
                {
                  key: "approve-action",
                  isSecondary: !0,
                  onClick: () => {
                    this.recordReviewEvent("approve", s),
                      this.updateReviewStatus(e.id, "approved", e.status);
                  },
                },
                (0, u.__)("Approve", "woocommerce")
              ),
              (0, a.createElement)(
                h.Button,
                {
                  key: "spam-action",
                  isTertiary: !0,
                  onClick: () => {
                    this.recordReviewEvent("mark_as_spam", s),
                      this.updateReviewStatus(e.id, "spam", e.status);
                  },
                },
                (0, u.__)("Mark as spam", "woocommerce")
              ),
              (0, a.createElement)(
                h.Button,
                {
                  key: "delete-action",
                  isDestructive: !0,
                  isTertiary: !0,
                  onClick: () => {
                    this.recordReviewEvent("delete", s),
                      this.deleteReview(e.id);
                  },
                },
                (0, u.__)("Delete", "woocommerce")
              ),
            ];
          return (0, a.createElement)(
            b.U,
            {
              className: "woocommerce-review-activity-card",
              key: e.id,
              title: o,
              subtitle: c,
              date: e.date_created_gmt,
              icon: l,
              actions: m,
            },
            (0, a.createElement)("span", {
              dangerouslySetInnerHTML: (0, H.ZP)(e.review),
            })
          );
        }
        renderReviews(e) {
          const t = e.map((e) => this.renderReview(e, this.props));
          return 0 === t.filter(Boolean).length
            ? (0, a.createElement)(a.Fragment, null)
            : (0, a.createElement)(
                a.Fragment,
                null,
                t,
                (0, a.createElement)(
                  _.Link,
                  {
                    href: (0, k.getAdminLink)(
                      "edit.php?post_type=product&page=product-reviews"
                    ),
                    onClick: () => this.recordReviewEvent("reviews_manage"),
                    className:
                      "woocommerce-layout__activity-panel-outbound-link woocommerce-layout__activity-panel-empty",
                    type: "wp-admin",
                  },
                  (0, u.__)("Manage all reviews", "woocommerce")
                )
              );
        }
        render() {
          const { isRequesting: e, isError: t, reviews: o } = this.props;
          if (t) {
            const e = (0, u.__)(
                "There was an error getting your reviews. Please try again.",
                "woocommerce"
              ),
              t = (0, u.__)("Reload", "woocommerce"),
              o = () => {
                window.location.reload();
              };
            return (0, a.createElement)(
              a.Fragment,
              null,
              (0, a.createElement)(_.EmptyContent, {
                title: e,
                actionLabel: t,
                actionURL: null,
                actionCallback: o,
              })
            );
          }
          return (0, a.createElement)(
            a.Fragment,
            null,
            (0, a.createElement)(
              _.Section,
              null,
              e || !o.length
                ? (0, a.createElement)(b.e, {
                    className: "woocommerce-review-activity-card",
                    hasAction: !0,
                    hasDate: !0,
                    lines: 1,
                  })
                : (0, a.createElement)(a.Fragment, null, this.renderReviews(o))
            )
          );
        }
      }
      (D.propTypes = {
        reviews: d().array.isRequired,
        isError: d().bool,
        isRequesting: d().bool,
      }),
        (D.defaultProps = { reviews: [], isError: !1, isRequesting: !1 }),
        (D.contextType = f.CurrencyContext);
      const B = (0, c.compose)([
        (0, n.withSelect)((e, t) => {
          const { hasUnapprovedReviews: o } = t,
            {
              getReviews: a,
              getReviewsError: c,
              isResolving: n,
            } = e(r.REVIEWS_STORE_NAME);
          let l = [],
            s = !1,
            i = !1;
          return (
            o && ((l = a(q)), (s = Boolean(c(q))), (i = n("getReviews", [q]))),
            { reviews: l, isError: s, isRequesting: i }
          );
        }),
        (0, n.withDispatch)((e, t) => {
          const {
              deleteReview: o,
              updateReview: a,
              invalidateResolution: c,
            } = e(r.REVIEWS_STORE_NAME),
            { createNotice: n } = e("core/notices");
          return {
            deleteReview: o,
            createNotice: n,
            updateReview: a,
            clearReviewsCache: () => {
              c("getReviews", [q]),
                t.reviews &&
                  t.reviews.length < 2 &&
                  c("getReviewsTotalCount", [U.wY]);
            },
          };
        }),
      ])(D);
      var W = o(14841);
      const V = { _fields: ["id"] },
        Z = { status: "publish", _fields: ["id"] },
        G = () => {
          const e = (0, n.useSelect)((e) => {
              const { getOrdersTotalCount: t, hasFinishedResolution: o } = e(
                  r.ORDERS_STORE_NAME
                ),
                { getProductsTotalCount: a, hasFinishedResolution: c } = e(
                  r.PRODUCTS_STORE_NAME
                ),
                n = t(V, 0),
                l = (0, E.sg)(e),
                s = (0, N.O3)("reviewsEnabled", "no"),
                i = (0, E.xX)(e, l),
                m = (0, N.O3)("manageStock", "no"),
                d = (0, E.ae)(e),
                u = (0, U.Vh)(e),
                p = a(Z, 0),
                _ =
                  !o("getOrdersTotalCount", [V, 0]) ||
                  !c("getProductsTotalCount", [Z, 0]),
                h = e(r.ONBOARDING_STORE_NAME).getTaskList("setup");
              return {
                loadingOrderAndProductCount: _,
                lowStockProductsCount: d,
                unapprovedReviewsCount: u,
                unreadOrdersCount: i,
                manageStock: m,
                isTaskListHidden: h?.isHidden,
                publishedProductCount: p,
                reviewsEnabled: s,
                totalOrderCount: n,
                orderStatuses: l,
              };
            }),
            t = e.loadingOrderAndProductCount
              ? []
              : (function ({
                  lowStockProductsCount: e,
                  unapprovedReviewsCount: t,
                  unreadOrdersCount: o,
                  manageStock: c,
                  isTaskListHidden: n,
                  orderStatuses: r,
                  publishedProductCount: l,
                  reviewsEnabled: s,
                  totalOrderCount: i,
                }) {
                  return n
                    ? [
                        i > 0 && {
                          className: "woocommerce-homescreen-card",
                          count: o,
                          collapsible: !0,
                          id: "orders-panel",
                          initialOpen: !1,
                          panel: (0, a.createElement)(M, {
                            unreadOrdersCount: o,
                            orderStatuses: r,
                          }),
                          title: (0, u.__)("Orders", "woocommerce"),
                        },
                        i > 0 &&
                          l > 0 &&
                          "yes" === c && {
                            className: "woocommerce-homescreen-card",
                            count: e,
                            id: "stock-panel",
                            initialOpen: !1,
                            collapsible: 0 !== e,
                            panel: (0, a.createElement)(O, {
                              lowStockProductsCount: e,
                            }),
                            title: (0, u.__)("Stock", "woocommerce"),
                          },
                        l > 0 &&
                          t > 0 &&
                          "yes" === s && {
                            className: "woocommerce-homescreen-card",
                            id: "reviews-panel",
                            count: t,
                            initialOpen: !1,
                            collapsible: 0 !== t,
                            panel: (0, a.createElement)(B, {
                              hasUnapprovedReviews: t > 0,
                            }),
                            title: (0, u.__)("Reviews", "woocommerce"),
                          },
                      ].filter(Boolean)
                    : [];
                })(e);
          if (
            ((0, a.useEffect)(() => {
              if (void 0 !== e.isTaskListHidden) {
                const o = t.reduce(
                  (e, t) => ((e[(0, g.snakeCase)(t.id)] = !0), e),
                  { task_list: e.isTaskListHidden }
                );
                (0, w.recordEvent)("activity_panel_visible_panels", o);
              }
            }, [e.isTaskListHidden]),
            0 === t.length)
          )
            return null;
          const o = (e) => {
            const { opened_panel: t } = (0, W.DP)(window.location.search);
            return e === t;
          };
          return (0, a.createElement)(
            h.Panel,
            { className: "woocommerce-activity-panel" },
            t.map((e) => {
              const {
                className: t,
                count: c,
                id: n,
                initialOpen: r,
                panel: l,
                title: s,
                collapsible: i,
              } = e;
              return i
                ? (0, a.createElement)(
                    h.PanelBody,
                    {
                      title: [
                        (0, a.createElement)(
                          h.__experimentalText,
                          {
                            key: s,
                            variant: "title.small",
                            size: "20",
                            lineHeight: "28px",
                          },
                          s
                        ),
                        null !== c &&
                          (0, a.createElement)(_.Badge, {
                            key: `${s}-badge`,
                            count: c,
                          }),
                      ],
                      key: n,
                      className: t,
                      initialOpen: o(n) || r,
                      collapsible: i,
                      disabled: !i,
                      onToggle: (e) => {
                        e &&
                          (0, w.recordEvent)("activity_panel_open", { tab: n });
                      },
                    },
                    (0, a.createElement)(h.PanelRow, null, l)
                  )
                : (0, a.createElement)(
                    "div",
                    { className: "components-panel__body", key: n },
                    (0, a.createElement)(
                      "h2",
                      { className: "components-panel__body-title" },
                      (0, a.createElement)(
                        h.Button,
                        {
                          className: "components-panel__body-toggle",
                          "aria-expanded": !1,
                          disabled: !0,
                        },
                        (0, a.createElement)(
                          h.__experimentalText,
                          {
                            variant: "title.small",
                            size: "20",
                            lineHeight: "28px",
                          },
                          s
                        ),
                        null !== c &&
                          (0, a.createElement)(_.Badge, { count: c })
                      )
                    )
                  );
            })
          );
        },
        j = ({ children: e, shouldStick: t = !1 }) => {
          const [o, c] = (0, a.useState)(!1),
            n = (0, a.useRef)(null),
            r = (0, a.useRef)(null),
            l = (0, a.useCallback)(() => {
              if (!n.current) return;
              const { bottom: e, top: t } = n.current.getBoundingClientRect();
              null === r.current && (r.current = t);
              const o = e < window.innerHeight;
              t === r.current && c(o);
            }, []);
          return (
            (0, a.useLayoutEffect)(() => {
              if (t)
                return (
                  l(),
                  window.addEventListener("resize", l),
                  window.addEventListener("scroll", l),
                  () => {
                    window.removeEventListener("resize", l),
                      window.removeEventListener("scroll", l);
                  }
                );
            }, [l, t]),
            (0, a.createElement)(
              "div",
              {
                className: "woocommerce-homescreen-column",
                ref: n,
                style: { position: t && o ? "sticky" : "static" },
              },
              e
            )
          );
        };
      var J = o(11927),
        $ = o(14812);
      const Y = o.p + "0e8ec0e45d8a1d55b30c.png",
        Q = o.p + "f574e970a917e4dff5ec.png",
        K = o.p + "d11c9a0dc859f1236a96.png",
        X = "woocommerce_task_list_welcome_modal_dismissed",
        ee = "woocommerce_welcome_from_calypso_modal_dismissed",
        te = "woocommerce_navigation_intro_modal_dismissed",
        oe = () => {
          const [e, t] = (0, a.useState)(!0),
            { updateOptions: o } = (0, n.useDispatch)(r.OPTIONS_STORE_NAME),
            {
              isDismissed: c,
              isResolving: l,
              isWelcomeModalShown: s,
            } = (0, n.useSelect)((e) => {
              const { getOption: t, isResolving: o } = e(r.OPTIONS_STORE_NAME),
                a = t(te);
              return {
                isDismissed: "yes" === a,
                isWelcomeModalShown: "yes" !== t(X),
                isResolving:
                  void 0 === a || o("getOption", [te]) || o("getOption", [X]),
              };
            }),
            i = () => {
              o({ [te]: "yes" }),
                (0, w.recordEvent)("navigation_intro_modal_close", {}),
                t(!1);
            };
          if (
            ((0, a.useEffect)(() => {
              l || !s || c || i();
            }, [c, l, s]),
            !e || c || l || s)
          )
            return null;
          const m = (e, t, o) => ({
            content: (0, a.createElement)(
              "div",
              { className: "woocommerce-navigation-intro-modal__page-wrapper" },
              (0, a.createElement)(
                "div",
                { className: "woocommerce-navigation-intro-modal__page-text" },
                (0, a.createElement)(
                  $.Text,
                  {
                    variant: "title.large",
                    as: "h2",
                    size: "32",
                    lineHeight: "40px",
                  },
                  e
                ),
                (0, a.createElement)(
                  $.Text,
                  {
                    as: "p",
                    variant: "body.large",
                    size: "16",
                    lineHeight: "24px",
                  },
                  t
                )
              ),
              (0, a.createElement)(
                "div",
                {
                  className:
                    "woocommerce-navigation-intro-modal__image-wrapper",
                },
                (0, a.createElement)("img", { alt: e, src: o })
              )
            ),
          });
          return (0, a.createElement)(h.Guide, {
            className: "woocommerce-navigation-intro-modal",
            onFinish: i,
            pages: [
              m(
                (0, u.__)("A new navigation for WooCommerce", "woocommerce"),
                (0, u.__)(
                  "All of your store management features in one place",
                  "woocommerce"
                ),
                Y
              ),
              m(
                (0, u.__)("Focus on managing your store", "woocommerce"),
                (0, u.__)(
                  "Give your attention to key areas of WooCommerce with little distraction",
                  "woocommerce"
                ),
                Q
              ),
              m(
                (0, u.__)(
                  "Easily find and favorite your extensions",
                  "woocommerce"
                ),
                (0, u.__)(
                  "They'll appear in the top level of the navigation for quick access",
                  "woocommerce"
                ),
                K
              ),
            ],
          });
        };
      var ae = o(92694);
      const ce = (0, ae.applyFilters)(
          "woocommerce_admin_homepage_default_stats",
          [
            "revenue/total_sales",
            "revenue/net_revenue",
            "orders/orders_count",
            "products/items_sold",
            "jetpack/stats/visitors",
            "jetpack/stats/views",
          ]
        ),
        ne = ["revenue/net_revenue", "products/items_sold"];
      var re = o(18667);
      const le = (0, n.withSelect)((e, { stats: t, query: o }) =>
        (0, re.A)(e, t, o)
      )(
        ({
          stats: e,
          primaryData: t,
          secondaryData: o,
          primaryRequesting: c,
          secondaryRequesting: n,
          primaryError: r,
          secondaryError: s,
          query: m,
        }) => {
          const { formatAmount: d, getCurrencyConfig: p } = (0, a.useContext)(
            f.CurrencyContext
          );
          if (r || s) return null;
          const h = (0, l.getPersistedQuery)(m),
            g = p();
          return (0, a.createElement)(
            "ul",
            {
              className: i()("woocommerce-stats-overview__stats", {
                "is-even": e.length % 2 == 0,
              }),
            },
            e.map((e) => {
              if (c || n)
                return (0, a.createElement)(_.SummaryNumberPlaceholder, {
                  key: e.stat,
                });
              const {
                primaryValue: r,
                secondaryValue: l,
                delta: s,
                reportUrl: i,
                reportUrlType: m,
              } = (0, re.Z)({
                indicator: e,
                primaryData: t,
                secondaryData: o,
                currency: g,
                formatAmount: d,
                persistedQuery: h,
              });
              return (0, a.createElement)(_.SummaryNumber, {
                isHomescreen: !0,
                key: e.stat,
                href: i,
                hrefType: m,
                label: e.label,
                value: r,
                prevLabel: (0, u.__)("Previous period:", "woocommerce"),
                prevValue: l,
                delta: s,
                onLinkClickCallback: () => {
                  (0, w.recordEvent)("statsoverview_indicators_click", {
                    key: e.stat,
                  });
                },
              });
            })
          );
        }
      );
      var se = o(23418);
      (0, u.__)("Facebook for WooCommerce", "woocommerce"),
        (0, u.__)("Jetpack", "woocommerce"),
        (0, u.__)("Klarna Checkout for WooCommerce", "woocommerce"),
        (0, u.__)("Klarna Payments for WooCommerce", "woocommerce"),
        (0, u.__)("Mailchimp for WooCommerce", "woocommerce"),
        (0, u.__)("Creative Mail for WooCommerce", "woocommerce"),
        (0, u.__)("WooCommerce PayPal", "woocommerce"),
        (0, u.__)("WooCommerce Stripe", "woocommerce"),
        (0, u.__)("WooCommerce Payfast", "woocommerce"),
        (0, u.__)("WooPayments", "woocommerce"),
        (0, u.__)("WooCommerce Shipping & Tax", "woocommerce"),
        (0, u.__)("WooCommerce Shipping & Tax", "woocommerce"),
        (0, u.__)("WooCommerce Shipping & Tax", "woocommerce"),
        (0, u.__)("WooCommerce ShipStation Gateway", "woocommerce"),
        (0, u.__)("Mercado Pago payments for WooCommerce", "woocommerce"),
        (0, u.__)("Google Listings and Ads", "woocommerce"),
        (0, u.__)("Razorpay", "woocommerce"),
        (0, u.__)("MailPoet", "woocommerce"),
        (0, u.__)("Pinterest for WooCommerce", "woocommerce"),
        (0, u.__)("TikTok for WooCommerce", "woocommerce"),
        (0, u.__)("Omnichannel for WooCommerce", "woocommerce");
      const ie =
        n.controls && n.controls.dispatch ? n.controls.dispatch : se.dispatch;
      n.controls && n.controls.resolveSelect
        ? n.controls.resolveSelect
        : se.select;
      const me = (e) => ie("core/notices", "createNotice", "error", e),
        de = ({
          onClickInstall: e,
          onClickDismiss: t,
          isBusy: o,
          jetpackInstallState: c,
        }) =>
          (0, a.createElement)(
            "article",
            { className: "woocommerce-stats-overview__install-jetpack-promo" },
            (0, a.createElement)(
              "div",
              {
                className:
                  "woocommerce-stats-overview__install-jetpack-promo__content",
              },
              (0, a.createElement)(
                _.H,
                null,
                (0, u.__)("Get traffic stats with Jetpack", "woocommerce")
              ),
              (0, a.createElement)(
                "p",
                null,
                (0, u.__)(
                  "Keep an eye on your views and visitors metrics with Jetpack. Requires Jetpack plugin and a WordPress.com account.",
                  "woocommerce"
                )
              )
            ),
            (0, a.createElement)(
              "footer",
              null,
              (0, a.createElement)(
                h.Button,
                {
                  isSecondary: !0,
                  onClick: () => {
                    (0, w.recordEvent)("statsoverview_install_jetpack"), e();
                  },
                  disabled: o,
                  isBusy: o,
                },
                ((e) =>
                  ({
                    unavailable: (0, u.__)("Get Jetpack", "woocommerce"),
                    installed: (0, u.__)("Activate Jetpack", "woocommerce"),
                    activated: (0, u.__)("Connect Jetpack", "woocommerce"),
                  }[e] || ""))(c)
              ),
              (0, a.createElement)(
                h.Button,
                {
                  isTertiary: !0,
                  onClick: () => {
                    (0, w.recordEvent)("statsoverview_dismiss_install_jetpack"),
                      t();
                  },
                  disabled: o,
                  isBusy: o,
                },
                (0, u.__)("No thanks", "woocommerce")
              )
            )
          ),
        ue = () => {
          const { currentUserCan: e } = (0, r.useUser)(),
            { updateUserPreferences: t, ...o } = (0, r.useUserPreferences)(),
            {
              canUserInstallPlugins: c,
              jetpackInstallState: l,
              isBusy: s,
            } = (0, n.useSelect)((t) => {
              const { getPluginInstallState: o, isPluginsRequesting: a } = t(
                  r.PLUGINS_STORE_NAME
                ),
                c = o("jetpack");
              return {
                isBusy:
                  a("getJetpackConnectUrl") ||
                  a("installPlugins") ||
                  a("activatePlugins"),
                jetpackInstallState: c,
                canUserInstallPlugins: e("install_plugins"),
              };
            }),
            { installJetpackAndConnect: i } = (0, n.useDispatch)(
              r.PLUGINS_STORE_NAME
            );
          return c
            ? (0, a.createElement)(de, {
                jetpackInstallState: l,
                isBusy: s,
                onClickInstall: () => {
                  i(me, k.getAdminLink);
                },
                onClickDismiss: () => {
                  const e = o.homepage_stats || {};
                  (e.installJetpackDismissed = !0), t({ homepage_stats: e });
                },
              })
            : null;
        },
        { performanceIndicators: pe = [] } = (0, N.O3)("dataEndpoints", {
          performanceIndicators: [],
        }),
        _e = pe.filter((e) => ce.includes(e.stat)),
        he = () =>
          (0, a.createElement)(
            $.Text,
            { variant: "title.small", size: "20", lineHeight: "28px" },
            (0, u.__)("Stats overview", "woocommerce")
          ),
        we = () => {
          const { updateUserPreferences: e, ...t } = (0,
            r.useUserPreferences)(),
            o = (0, g.get)(t, ["homepage_stats", "hiddenStats"], ne),
            c = (0, n.useSelect)(
              (e) => e(r.PLUGINS_STORE_NAME).isJetpackConnected(),
              []
            ),
            s = (t.homepage_stats || {}).installJetpackDismissed,
            i = _e.filter((e) => !o.includes(e.stat));
          return (0, a.createElement)(
            h.Card,
            {
              size: "large",
              className:
                "woocommerce-stats-overview woocommerce-homescreen-card",
            },
            (0, a.createElement)(
              h.CardHeader,
              { size: "medium" },
              (0, a.createElement)(he, null),
              (0, a.createElement)(_.EllipsisMenu, {
                label: (0, u.__)(
                  "Choose which values to display",
                  "woocommerce"
                ),
                renderContent: () =>
                  (0, a.createElement)(
                    a.Fragment,
                    null,
                    (0, a.createElement)(
                      _.MenuTitle,
                      null,
                      (0, u.__)("Display stats:", "woocommerce")
                    ),
                    _e.map((t) => {
                      const c = !o.includes(t.stat);
                      return (0, a.createElement)(
                        _.MenuItem,
                        {
                          checked: c,
                          isCheckbox: !0,
                          isClickable: !0,
                          key: t.stat,
                          onInvoke: () =>
                            ((t) => {
                              const a = (0, g.xor)(o, [t]);
                              e({ homepage_stats: { hiddenStats: a } }),
                                (0, w.recordEvent)(
                                  "statsoverview_indicators_toggle",
                                  {
                                    indicator_name: t,
                                    status: a.includes(t) ? "off" : "on",
                                  }
                                );
                            })(t.stat),
                        },
                        t.label
                      );
                    })
                  ),
              })
            ),
            (0, a.createElement)(
              h.TabPanel,
              {
                className: "woocommerce-stats-overview__tabs",
                onSelect: (e) => {
                  (0, w.recordEvent)("statsoverview_date_picker_update", {
                    period: e,
                  });
                },
                tabs: [
                  { title: (0, u.__)("Today", "woocommerce"), name: "today" },
                  {
                    title: (0, u.__)("Week to date", "woocommerce"),
                    name: "week",
                  },
                  {
                    title: (0, u.__)("Month to date", "woocommerce"),
                    name: "month",
                  },
                ],
              },
              (e) =>
                (0, a.createElement)(
                  a.Fragment,
                  null,
                  !c && !s && (0, a.createElement)(ue, null),
                  (0, a.createElement)(le, {
                    query: { period: e.name, compare: "previous_period" },
                    stats: i,
                  })
                )
            ),
            (0, a.createElement)(
              h.CardFooter,
              null,
              (0, a.createElement)(
                _.Link,
                {
                  className: "woocommerce-stats-overview__more-btn",
                  href: (0, l.getNewPath)({}, "/analytics/overview"),
                  type: "wc-admin",
                  onClick: () => {
                    (0, w.recordEvent)("statsoverview_indicators_click", {
                      key: "view_detailed_stats",
                    });
                  },
                },
                (0, u.__)("View detailed stats", "woocommerce")
              )
            )
          );
        };
      var ge = o(26184),
        Ee = o(34200),
        ve = o(87983),
        ye = o(58358),
        ke = o(92486),
        fe = o(49704),
        be = o(25918),
        Ne = o(6520);
      const Se = ({ title: e, children: t }) =>
        (0, a.createElement)(
          "div",
          { className: "woocommerce-quick-links__category" },
          (0, a.createElement)(
            "h3",
            { className: "woocommerce-quick-links__category-header" },
            e
          ),
          t
        );
      var Ce = o(23374),
        Me = o(12532);
      const Te = ({ icon: e, title: t, href: o, linkType: c, onClick: n }) => {
        const r = "external" === c;
        return (0, a.createElement)(
          "div",
          { className: "woocommerce-quick-links__item" },
          (0, a.createElement)(
            _.Link,
            {
              onClick: n,
              href: o,
              type: c,
              target: r ? "_blank" : null,
              className: "woocommerce-quick-links__item-link",
            },
            (0, a.createElement)(Ce.Z, {
              className: "woocommerce-quick-links__item-link__icon",
              icon: e,
            }),
            (0, a.createElement)(
              $.Text,
              {
                className: "woocommerce-quick-links__item-link__text",
                as: "div",
                variant: "button",
                weight: "600",
                size: "14",
                lineHeight: "20px",
              },
              t
            ),
            r && (0, a.createElement)(Ce.Z, { icon: Me.Z })
          )
        );
      };
      function ze({ path: e, tab: t = null, type: o, href: a = null }) {
        return (
          {
            "wc-admin": {
              href: `admin.php?page=wc-admin&path=%2F${e}`,
              linkType: "wc-admin",
            },
            "wp-admin": { href: e, linkType: "wp-admin" },
            "wc-settings": {
              href: `admin.php?page=wc-settings&tab=${t}`,
              linkType: "wp-admin",
            },
          }[o] || { href: a, linkType: "external" }
        );
      }
      const Re = () => {
        const e = (0, N.O3)("shopUrl"),
          t = (0, ae.applyFilters)(
            "woocommerce_admin_homescreen_quicklinks",
            []
          ).reduce(
            (e, { icon: t, href: o, title: a }) => (
              new URL(o, window.location.href).origin ===
                window.location.origin &&
                e.push({
                  icon: t,
                  link: { href: o, linkType: "wp-admin" },
                  title: a,
                  listItemTag: "quick-links-extension-link",
                }),
              e
            ),
            []
          ),
          o = (function (e) {
            return [
              {
                title: (0, u.__)("Marketing & Merchandising", "woocommerce"),
                items: [
                  {
                    title: (0, u.__)("Marketing", "woocommerce"),
                    link: ze({ type: "wc-admin", path: "marketing" }),
                    icon: ge.Z,
                    listItemTag: "marketing",
                  },
                  {
                    title: (0, u.__)("Add products", "woocommerce"),
                    link: ze({
                      type: "wp-admin",
                      path: "post-new.php?post_type=product",
                    }),
                    icon: Ee.Z,
                    listItemTag: "add-products",
                  },
                  {
                    title: (0, u.__)("Personalize my store", "woocommerce"),
                    link: ze({ type: "wp-admin", path: "customize.php" }),
                    icon: ve.Z,
                    listItemTag: "personalize-store",
                  },
                  {
                    title: (0, u.__)("View my store", "woocommerce"),
                    link: ze({ type: "external", href: e }),
                    icon: ye.Z,
                    listItemTag: "view-store",
                  },
                ],
              },
              {
                title: (0, u.__)("Settings", "woocommerce"),
                items: [
                  {
                    title: (0, u.__)("Store details", "woocommerce"),
                    link: ze({ type: "wc-settings", tab: "general" }),
                    icon: ke.Z,
                    listItemTag: "edit-store-details",
                  },
                  {
                    title: (0, u.__)("Payments", "woocommerce"),
                    link: ze({ type: "wc-settings", tab: "checkout" }),
                    icon: fe.Z,
                    listItemTag: "payment-settings",
                  },
                  {
                    title: (0, u.__)("Tax", "woocommerce"),
                    link: ze({ type: "wc-settings", tab: "tax" }),
                    icon: be.Z,
                    listItemTag: "tax-settings",
                  },
                  {
                    title: (0, u.__)("Shipping", "woocommerce"),
                    link: ze({ type: "wc-settings", tab: "shipping" }),
                    icon: Ne.Z,
                    listItemTag: "shipping-settings",
                  },
                ],
              },
            ];
          })(e),
          c = { title: (0, u.__)("Extensions", "woocommerce"), items: t },
          n = t.length ? [...o, c] : o;
        return (0, a.createElement)(
          h.Card,
          { size: "medium" },
          (0, a.createElement)(
            h.CardHeader,
            { size: "medium" },
            (0, a.createElement)(
              $.Text,
              { variant: "title.small", size: "20", lineHeight: "28px" },
              (0, u.__)("Store management", "woocommerce")
            )
          ),
          (0, a.createElement)(
            h.CardBody,
            {
              size: "custom",
              className: "woocommerce-store-management-links__card-body",
            },
            n.map((e) =>
              (0, a.createElement)(
                Se,
                { key: e.title, title: e.title },
                e.items.map(
                  ({
                    icon: e,
                    listItemTag: t,
                    title: o,
                    link: { href: c, linkType: n },
                  }) =>
                    (0, a.createElement)(Te, {
                      icon: e,
                      key: `${o}_${t}_${c}`,
                      title: o,
                      linkType: n,
                      href: c,
                      onClick: () => {
                        (0, w.recordEvent)("home_quick_links_click", {
                          task_name: t,
                        });
                      },
                    })
                )
              )
            )
          )
        );
      };
      var Ae = o(47529);
      const Pe = () =>
          (0, a.createElement)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "517",
              height: "160",
              fill: "none",
            },
            (0, a.createElement)("defs", null),
            (0, a.createElement)(
              "g",
              { clipPath: "url(#clip0)" },
              (0, a.createElement)("path", {
                className: "fill-theme-color",
                d: "M0 0h517v160H0z",
              }),
              (0, a.createElement)("path", {
                fill: "#fff",
                fillOpacity: ".65",
                d: "M125.85 217.924l-1.055-.321c-34.868-10.598-101.138-36.619-95.91-101.998 7.156-89.462 89.192-28.933 194.231-87.715 161.485-90.37 242.851-42.249 253.957 78.717 10.842 118.101-82.942 115.494-138.938 123.306-118.486 16.529-165.516 2.231-212.285-11.989z",
              }),
              (0, a.createElement)("path", {
                fill: "#F6F7F7",
                d: "M125 33h267v185H125z",
              }),
              (0, a.createElement)("path", {
                fill: "#CCC",
                d: "M327.367 93.974a6.417 6.417 0 00-6.285 7.671 6.418 6.418 0 005.035 5.044 6.405 6.405 0 006.579-2.73 6.427 6.427 0 00-.797-8.105 6.404 6.404 0 00-4.532-1.88zm0 11.615a5.18 5.18 0 01-3.668-1.522 5.2 5.2 0 01-1.23-5.38 5.196 5.196 0 014.168-3.447 5.18 5.18 0 014.967 2.137 5.201 5.201 0 01-1.546 7.453 5.186 5.186 0 01-2.706.75l.015.009z",
              }),
              (0, a.createElement)("path", {
                fill: "#CCC",
                d: "M329.332 103.181l.806-.811a.354.354 0 00.078-.391.365.365 0 00-.078-.116l-1.456-1.461 1.456-1.458a.363.363 0 00.105-.254.36.36 0 00-.105-.254l-.806-.81a.354.354 0 00-.254-.106.356.356 0 00-.255.106l-1.456 1.458-1.456-1.458a.35.35 0 00-.253-.105.355.355 0 00-.253.105l-.809.826a.362.362 0 00-.078.39.363.363 0 00.078.117l1.456 1.458-1.456 1.461a.369.369 0 00-.105.254.356.356 0 00.105.254l.809.81a.354.354 0 00.39.078.354.354 0 00.116-.078l1.456-1.461 1.456 1.461a.366.366 0 00.509-.015zM314.559 145.63a6.413 6.413 0 00-2.722-4.13 6.429 6.429 0 00-4.883-.957l-.192.046c-.346.08-.684.191-1.01.33a6.437 6.437 0 00-3.892 5.926 6.433 6.433 0 003.907 5.916l.183.074a6.402 6.402 0 007.999-2.997 6.423 6.423 0 00.735-3.001 6.196 6.196 0 00-.125-1.207zm-1.184 1.978a.028.028 0 010 .018v.058a5.213 5.213 0 01-.913 2.181 5.191 5.191 0 01-4.068 2.146 5.162 5.162 0 01-3.445-1.2 5.2 5.2 0 01.693-8.443 4.936 4.936 0 011.026-.464l.192-.058a5.176 5.176 0 014.527.859 5.201 5.201 0 012.058 4.129 4.906 4.906 0 01-.07.774z",
              }),
              (0, a.createElement)("path", {
                fill: "#CCC",
                d: "M310.223 149.613l.808-.81a.349.349 0 00.078-.116.348.348 0 000-.275.353.353 0 00-.078-.117l-1.455-1.458 1.455-1.458a.36.36 0 00.079-.393.36.36 0 00-.079-.117l-.808-.807a.362.362 0 00-.391-.078.349.349 0 00-.116.078l-1.455 1.464-1.465-1.464a.366.366 0 00-.254-.106.36.36 0 00-.253.106l-.809.807a.358.358 0 00-.078.393.358.358 0 00.078.117l1.459 1.458-1.459 1.458a.356.356 0 00-.078.392.382.382 0 00.078.116l.809.81a.365.365 0 00.253.106.366.366 0 00.254-.106l1.458-1.458 1.456 1.458a.353.353 0 00.513 0zM295.605 51.781l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm0 0l-.583-.587a.297.297 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372a.31.31 0 00.339.07.297.297 0 00.1-.07l4.465-4.439a.316.316 0 00.097-.22.313.313 0 00-.094-.223zm-3.628-4.619a6.402 6.402 0 00-5.921 3.963 6.432 6.432 0 001.389 6.996 6.404 6.404 0 009.86-.973 6.428 6.428 0 00-.797-8.106 6.403 6.403 0 00-4.531-1.88zm0 11.616a5.186 5.186 0 01-4.793-3.208 5.2 5.2 0 011.124-5.663 5.186 5.186 0 015.654-1.126 5.204 5.204 0 011.685 8.476 5.17 5.17 0 01-3.67 1.515v.006zm3.628-6.99l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zm0 0l-.583-.588a.298.298 0 00-.219-.093.31.31 0 00-.22.093l-3.662 3.635-1.547-1.562a.308.308 0 00-.437 0l-.589.584a.313.313 0 00-.093.22.307.307 0 00.093.22l2.35 2.372c.029.03.063.053.1.07a.31.31 0 00.239 0 .297.297 0 00.1-.07l4.465-4.438a.304.304 0 00.075-.347.31.31 0 00-.072-.103v.006zM306.96 98.595l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm0 0l-.582-.59a.311.311 0 00-.22-.093.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.303.303 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.312.312 0 00.097-.22.308.308 0 00-.091-.22zm-3.628-4.621a6.417 6.417 0 00-6.285 7.671 6.412 6.412 0 005.035 5.044 6.401 6.401 0 006.578-2.73 6.42 6.42 0 00-.797-8.105 6.4 6.4 0 00-4.531-1.88zm0 11.615a5.18 5.18 0 01-4.793-3.208 5.201 5.201 0 013.781-7.085 5.179 5.179 0 015.326 2.21c.57.854.874 1.86.874 2.887a5.202 5.202 0 01-1.516 3.677 5.178 5.178 0 01-3.672 1.516v.003zm3.628-6.99l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zm0 0l-.582-.59a.31.31 0 00-.22-.094.308.308 0 00-.22.093l-3.662 3.635-1.547-1.562a.31.31 0 00-.22-.094.302.302 0 00-.22.094l-.589.584a.31.31 0 000 .44l2.347 2.372c.029.03.063.053.101.069a.302.302 0 00.339-.069l4.467-4.438a.3.3 0 00.098-.22.304.304 0 00-.092-.223v.002zM287.774 145.407l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.309.309 0 00.097-.219.309.309 0 00-.091-.221zm-3.628-4.622a6.416 6.416 0 00-6.285 7.671 6.414 6.414 0 005.035 5.044 6.393 6.393 0 003.702-.365 6.418 6.418 0 003.957-5.931 6.43 6.43 0 00-1.877-4.539 6.403 6.403 0 00-4.532-1.88zm0 11.616a5.181 5.181 0 01-2.882-.876 5.2 5.2 0 011.87-9.418 5.186 5.186 0 015.326 2.21c.57.855.874 1.859.874 2.887a5.191 5.191 0 01-1.515 3.678 5.163 5.163 0 01-3.673 1.516v.003zm3.628-6.991l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zm0 0l-.582-.59a.303.303 0 00-.101-.069.302.302 0 00-.339.069l-3.662 3.634-1.547-1.562a.31.31 0 00-.439 0l-.589.584a.301.301 0 00-.07.34c.017.038.04.072.07.1l2.346 2.372a.301.301 0 00.339.07.321.321 0 00.101-.07l4.467-4.438a.297.297 0 00.098-.22.293.293 0 00-.023-.121.284.284 0 00-.069-.102v.003zM349.568 75.187l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm-3.628-4.619a6.402 6.402 0 00-4.17 1.5 6.422 6.422 0 00-1.386 8.21 6.415 6.415 0 003.447 2.79 6.4 6.4 0 004.477-.092c.317-.126.624-.278.915-.456a6.418 6.418 0 002.93-7.236 6.422 6.422 0 00-2.309-3.413 6.4 6.4 0 00-3.904-1.303zm2.273 11.087a5.056 5.056 0 01-.665.272 5.213 5.213 0 01-3.406-.067 5.197 5.197 0 01-1.681-8.731 5.182 5.182 0 018.501 2.56 5.195 5.195 0 01-2.749 5.966zm1.355-6.468l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447zm0 0l-.583-.578a.298.298 0 00-.219-.093.306.306 0 00-.22.093l-1.904 1.895-.687.682-.058.055-.357.358-.638.632-1.547-1.562a.308.308 0 00-.44 0l-.589.584a.312.312 0 00-.093.22.307.307 0 00.093.22l2.216 2.241.131.132a.304.304 0 00.44.003l1.849-1.835.61-.61 2.002-1.99a.306.306 0 00-.006-.447z",
              }),
              (0, a.createElement)("path", {
                className: "fill-theme-color",
                d: "M268.92 47H150.08c-3.358 0-6.08 2.91-6.08 6.5s2.722 6.5 6.08 6.5h118.84c3.358 0 6.08-2.91 6.08-6.5s-2.722-6.5-6.08-6.5z",
                opacity: ".6",
              }),
              (0, a.createElement)("path", {
                className: "fill-theme-color",
                d: "M321.919 71H150.081c-3.359 0-6.081 2.686-6.081 6s2.722 6 6.081 6h171.838c3.359 0 6.081-2.686 6.081-6s-2.722-6-6.081-6z",
                opacity: ".3",
              }),
              (0, a.createElement)("path", {
                className: "fill-theme-color",
                d: "M279.927 94H150.073c-3.354 0-6.073 2.91-6.073 6.5s2.719 6.5 6.073 6.5h129.854c3.354 0 6.073-2.91 6.073-6.5s-2.719-6.5-6.073-6.5z",
                opacity: ".6",
              }),
              (0, a.createElement)("path", {
                className: "fill-theme-color",
                d: "M321.919 118H150.081c-3.359 0-6.081 2.686-6.081 6s2.722 6 6.081 6h171.838c3.359 0 6.081-2.686 6.081-6s-2.722-6-6.081-6z",
                opacity: ".3",
              }),
              (0, a.createElement)("path", {
                className: "fill-theme-color",
                d: "M261.916 141H150.084c-3.36 0-6.084 2.686-6.084 6s2.724 6 6.084 6h111.832c3.36 0 6.084-2.686 6.084-6s-2.724-6-6.084-6z",
                opacity: ".1",
              }),
              (0, a.createElement)("path", {
                fill: "#CCC",
                d: "M316.161 47.162a6.4 6.4 0 00-5.92 3.963 6.432 6.432 0 001.389 6.996 6.404 6.404 0 009.86-.973 6.428 6.428 0 00-.797-8.106 6.404 6.404 0 00-4.532-1.88zm0 11.616a5.18 5.18 0 01-2.882-.876 5.198 5.198 0 011.87-9.417 5.181 5.181 0 015.326 2.21c.57.854.874 1.859.874 2.887a5.195 5.195 0 01-3.201 4.8c-.63.26-1.305.392-1.987.39v.006z",
              }),
              (0, a.createElement)("path", {
                fill: "#CCC",
                d: "M318.127 56.366l.808-.807a.35.35 0 00.078-.117.346.346 0 000-.276.35.35 0 00-.078-.117l-1.458-1.458 1.455-1.458a.35.35 0 00.078-.117.346.346 0 000-.277.35.35 0 00-.078-.117l-.808-.807a.364.364 0 00-.254-.105.358.358 0 00-.253.105l-1.456 1.458-1.455-1.458a.361.361 0 00-.51 0l-.806.807a.365.365 0 00-.107.255.365.365 0 00.107.256l1.456 1.458-1.453 1.455a.365.365 0 00-.079.394.381.381 0 00.079.116l.806.807a.353.353 0 00.255.106.363.363 0 00.255-.106l1.455-1.458 1.456 1.458a.352.352 0 00.253.107.356.356 0 00.254-.104zM369.966 70.568a6.402 6.402 0 00-5.921 3.963 6.432 6.432 0 001.389 6.995 6.404 6.404 0 0010.94-4.539 6.403 6.403 0 00-3.953-5.935 6.383 6.383 0 00-2.455-.484zm0 11.616a5.179 5.179 0 01-3.17-1.076 5.203 5.203 0 01-1.621-6.136 5.187 5.187 0 015.512-3.13 5.186 5.186 0 012.985 1.519 5.2 5.2 0 01-1.158 8.146 5.18 5.18 0 01-2.548.674v.003z",
              }),
              (0, a.createElement)("path", {
                fill: "#CCC",
                d: "M371.925 79.772l.808-.807a.363.363 0 000-.51l-1.458-1.459 1.458-1.458a.348.348 0 00.078-.116.343.343 0 000-.275.346.346 0 00-.078-.116l-.808-.81a.358.358 0 00-.507 0l-1.452 1.458-1.456-1.458a.358.358 0 00-.507 0l-.808.81a.36.36 0 00-.078.391.348.348 0 00.078.116l1.455 1.458-1.455 1.458a.364.364 0 000 .51l.808.808a.35.35 0 00.507 0l1.456-1.458 1.458 1.458a.358.358 0 00.501 0z",
              }),
              (0, a.createElement)("path", {
                className: "fill-theme-color",
                d: "M344 94h90v80h-90z",
              }),
              (0, a.createElement)("path", {
                fill: "#fff",
                fillOpacity: ".65",
                d: "M364.607 150.419H357v25.307h7.607v-25.307zM379.317 132h-7.607v43.455h7.607V132zM394.026 136h-7.607v61.603h7.607V136zM408.736 123h-7.607v55.726h7.607V123zM423.445 132.197h-7.607v38.342h7.607v-38.342z",
                opacity: ".2",
              }),
              (0, a.createElement)("path", {
                fill: "#fff",
                d: "M356.331 134l-.331-.495 15.486-21.052 13.65 14.005 11.039-17.456 4.84 5.868 13.168-11.268 14.625 14.021L451.763 99l.237.594-23.213 18.833-14.619-14.015-13.201 11.297-4.748-5.756-11.014 17.418-13.677-14.031L356.331 134z",
              })
            ),
            (0, a.createElement)(
              "defs",
              null,
              (0, a.createElement)(
                "clipPath",
                { id: "clip0" },
                (0, a.createElement)("path", {
                  fill: "#fff",
                  d: "M0 0h517v160H0z",
                })
              )
            )
          ),
        Le = ({ title: e, body: t }) =>
          (0, a.createElement)(
            "div",
            { className: "woocommerce__welcome-modal__page-content" },
            (0, a.createElement)(
              "h2",
              { className: "woocommerce__welcome-modal__page-content__header" },
              e
            ),
            (0, a.createElement)(
              "p",
              { className: "woocommerce__welcome-modal__page-content__body" },
              t
            )
          ),
        Oe = {
          image: (0, a.createElement)(Pe, null),
          content: (0, a.createElement)(Le, {
            title: (0, u.__)(
              "Welcome to your new store management experience",
              "woocommerce"
            ),
            body: (0, y.Z)({
              mixedString: (0, u.__)(
                "We've designed your navigation and home screen to help you focus on the things that matter most in managing your online store. {{link}}Learn more{{/link}} about these changes – or explore on your own.",
                "woocommerce"
              ),
              components: {
                link: (0, a.createElement)(_.Link, {
                  href: "https://wordpress.com/support/new-woocommerce-experience-on-wordpress-dot-com/",
                  type: "external",
                  target: "_blank",
                }),
              },
            }),
          }),
        };
      function xe({ onClose: e }) {
        const [t, o] = (0, a.useState)(!0);
        if (
          ((0, a.useEffect)(() => {
            (0, w.recordEvent)("welcome_from_calypso_modal_open");
          }, []),
          !t)
        )
          return null;
        const c = i()(
          "woocommerce__welcome-modal",
          "woocommerce__welcome-from-calypso-modal"
        );
        return (0, a.createElement)(h.Guide, {
          onFinish: () => {
            e && e(),
              o(!1),
              (0, w.recordEvent)("welcome_from_calypso_modal_close");
          },
          className: c,
          finishButtonText: (0, u.__)("Let's go", "woocommerce"),
          pages: [Oe],
        });
      }
      const Ie = [
          {
            image: (0, a.createElement)(Pe, null),
            content: (0, a.createElement)(Le, {
              title: (0, u.__)(
                "Welcome to your WooCommerce store’s online HQ!",
                "woocommerce"
              ),
              body: (0, u.__)(
                "Here's where you’ll find setup suggestions, tips and tools, and key data on your store’s performance and earnings — all the basics for store management and growth.",
                "woocommerce"
              ),
            }),
          },
          {
            image: (0, a.createElement)(
              () =>
                (0, a.createElement)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "517",
                    height: "160",
                    fill: "none",
                  },
                  (0, a.createElement)("defs", null),
                  (0, a.createElement)(
                    "g",
                    { clipPath: "url(#clip0)" },
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M0 0h517v160H0z",
                    }),
                    (0, a.createElement)("path", {
                      fill: "#fff",
                      fillOpacity: ".65",
                      d: "M33.576 185.926c-6.271-.911-14.742-.279-17.182 7.085-1.239 3.736-.178 7.645.98 11.08 4.89 14.682 11.49 28.444 19.643 40.954 3.897 5.965 8.253 11.884 9.592 19.504 1.34 7.619-.56 16.084-2.934 23.945-5.595 18.62-13.762 36.371-24.188 52.572 16.006 9.711 34.165 19.634 52.684 12.57 11.09-4.232 21.041-14.268 32.365-15.961 7.562-1.132 14.735 1.648 21.594 4.467a998.376 998.376 0 0195.343 45.227c13.023 7.042 26.207 14.481 40.901 16.153 14.694 1.672 31.486-3.518 41.947-17.66 1.611-2.179 3.241-4.669 5.483-5.546 2.02-.776 4.069-.045 5.952.688l113.896 44.033c6.241 2.411 12.718 4.853 19.534 3.832 6.606-.985 12.833-5.095 18.858-9.148 13.771-9.237 29.242-21.105 32.239-39.005 2.407-14.347-4.339-27.253-11.974-37.283-7.636-10.03-16.705-19.204-20.353-32.315-5.549-19.955 2.798-42.949 9.281-64.164a405.4 405.4 0 0013.244-58.574c2.588-17.377 4.004-35.179.91-51.659-3.095-16.481-11.265-31.624-24.089-38.27-16.746-8.681-38.828-2.057-54.255-13.347-13.04-9.513-17.58-29.035-25.856-44.316-14.698-27.146-41.453-40.923-67.958-50.405-28.1-10.066-58.213-16.679-88.607-10-6.962 1.527-14.047 3.833-20.152 8.649-9.36 7.388-15.196 19.616-22.986 29.33C156.104 57.468 100.341 49.156 68.22 87.48c-11.398 13.594-17.581 31.878-18.797 49.831-1.31 19.318 8.69 33.652 8.706 50.888-7.135 2.277-17.21-1.211-24.553-2.273z",
                    }),
                    (0, a.createElement)("path", {
                      fill: "#F6F7F7",
                      d: "M113 33h267v185H113z",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M248.466 73.79h-114.69V47.88h114.69V73.79zm-114.015-.673h113.341V48.554H134.451v24.563z",
                    }),
                    (0, a.createElement)("path", {
                      fill: "#CCC",
                      d: "M155.702 56.63h-12.818v12.786h12.818V56.63z",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M154.016 67.733h-13.493V54.274h13.493v13.46zm-12.819-.673h12.144V54.947h-12.144V67.06z",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M225.267 56.966h-50v.673h50v-.673z",
                      opacity: ".7",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M235.311 61.677h-60.044v.673h60.044v-.673z",
                      opacity: ".5",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M225.267 66.387h-50v.673h50v-.673z",
                      opacity: ".2",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M248.466 147.142h-114.69v-25.909h114.69v25.909zm-114.015-.673h113.341v-24.563H134.451v24.563z",
                    }),
                    (0, a.createElement)("path", {
                      fill: "#CCC",
                      d: "M155.702 129.981h-12.818v12.786h12.818v-12.786z",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M154.016 141.085h-13.493v-13.459h13.493v13.459zm-12.819-.673h12.144v-12.113h-12.144v12.113z",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M235.311 130.318h-60.044v.673h60.044v-.673z",
                      opacity: ".7",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M225.267 135.028h-50v.673h50v-.673z",
                      opacity: ".5",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M215.267 139.739h-40v.673h40v-.673z",
                      opacity: ".2",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M289.62 110.465H174.93V84.557h114.69v25.908zm-114.016-.672h113.341V85.23H175.604v24.563z",
                    }),
                    (0, a.createElement)("path", {
                      fill: "#CCC",
                      d: "M267.694 106.092h12.818V93.305h-12.818v12.787z",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M282.873 104.409H269.38V90.95h13.493v13.459zm-12.818-.673h12.144V91.623h-12.144v12.113z",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M248.129 93.642h-60.044v.673h60.044v-.673z",
                      opacity: ".7",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M238.085 98.353h-50v.672h50v-.672z",
                      opacity: ".5",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M243.085 103.063h-55v.673h55v-.673z",
                      opacity: ".2",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M266.035 66.154a5.363 5.363 0 005.369-5.356 5.363 5.363 0 00-5.369-5.356c-2.966 0-5.37 2.398-5.37 5.356 0 2.958 2.404 5.356 5.37 5.356zM273.793 140.515c2.966 0 5.37-2.398 5.37-5.356 0-2.958-2.404-5.356-5.37-5.356a5.363 5.363 0 00-5.369 5.356 5.363 5.363 0 005.369 5.356zM153.706 102.83a5.363 5.363 0 005.37-5.356c0-2.959-2.404-5.357-5.37-5.357s-5.37 2.398-5.37 5.357a5.363 5.363 0 005.37 5.356z",
                      opacity: ".5",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M401.276 172h-70.552a8.79 8.79 0 01-6.169-2.517 8.532 8.532 0 01-2.555-6.078V131.56a3.368 3.368 0 011.078-2.471l37.386-34.915A8.113 8.113 0 01366 92c2.06 0 4.041.778 5.536 2.174l35.645 33.289a8.882 8.882 0 012.084 2.944 8.78 8.78 0 01.735 3.515v29.483c0 2.28-.919 4.466-2.555 6.078a8.79 8.79 0 01-6.169 2.517z",
                    }),
                    (0, a.createElement)("path", {
                      fill: "#F0F0F0",
                      d: "M393.267 106h-54.534c-2.614 0-4.733 2.053-4.733 4.585v52.83c0 2.532 2.119 4.585 4.733 4.585h54.534c2.614 0 4.733-2.053 4.733-4.585v-52.83c0-2.532-2.119-4.585-4.733-4.585z",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M366 150.493l-41.579-20.323a1.667 1.667 0 00-1.631.091 1.695 1.695 0 00-.579.619 1.725 1.725 0 00-.211.826v34.967a5.345 5.345 0 001.543 3.767 5.261 5.261 0 003.725 1.56h77.464a5.261 5.261 0 003.725-1.56 5.345 5.345 0 001.543-3.767v-34.368c0-.352-.088-.699-.257-1.008a2.069 2.069 0 00-1.688-1.071 2.035 2.035 0 00-1.009.205L366 150.493zM390 118h-48v2h48v-2zM390 124h-48v2h48v-2z",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M384 130h-42v2h42v-2z",
                    }),
                    (0, a.createElement)("path", {
                      fill: "#fff",
                      d: "M335 112a7 7 0 100-14 7 7 0 000 14z",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M336 98a8.003 8.003 0 00-7.391 4.939 7.992 7.992 0 00-.455 4.622 7.993 7.993 0 006.285 6.285A8 8 0 00344 106a8.022 8.022 0 00-8-8zm-1.642 12.265l-4.1-4.1 1.15-1.15 2.954 2.954 6.234-6.234 1.15 1.15-7.388 7.38z",
                    })
                  ),
                  (0, a.createElement)(
                    "defs",
                    null,
                    (0, a.createElement)(
                      "clipPath",
                      { id: "clip0" },
                      (0, a.createElement)("path", {
                        fill: "#fff",
                        d: "M0 0h517v160H0z",
                      })
                    )
                  )
                ),
              null
            ),
            content: (0, a.createElement)(Le, {
              title: (0, u.__)(
                "A personalized inbox full of relevant advice",
                "woocommerce"
              ),
              body: (0, u.__)(
                "Check your inbox for helpful growth tips tailored to your store and notifications about key traffic and sales milestones. We look forward to celebrating them with you!",
                "woocommerce"
              ),
            }),
          },
          {
            image: (0, a.createElement)(
              () =>
                (0, a.createElement)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "517",
                    height: "160",
                    fill: "none",
                  },
                  (0, a.createElement)("defs", null),
                  (0, a.createElement)(
                    "g",
                    { clipPath: "url(#clip0)" },
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M0 0h517v160H0z",
                    }),
                    (0, a.createElement)("path", {
                      fill: "#fff",
                      fillOpacity: ".65",
                      d: "M30.501 63.74c7.21-10.372 19.533-17.051 31.735-22.399l2.057-.888c12.774-5.469 25.944-10.008 39.27-14.127 7.129-2.21 14.285-4.313 21.448-6.389l5.615-1.62c7.29-2.106 14.596-4.21 21.916-6.315a6165.97 6165.97 0 0121.511-6.139 3346.684 3346.684 0 0127.597-7.677 2189.847 2189.847 0 0121.603-5.782c9.237-2.42 18.491-4.764 27.761-7.035 7.246-1.77 14.502-3.483 21.767-5.14a1152.381 1152.381 0 0128.025-6 940.985 940.985 0 0119.106-3.654l2.908-.52c27.416-4.852 55.724-8.222 82.193-2.775l.715.151c.355.074.71.148 1.067.23a87.181 87.181 0 0114.309 4.404c8.282 3.398 15.644 8.247 20.596 14.967 7.763 10.54 8.624 24.398 6.126 37.281-2.498 12.884-8.007 25.346-12.299 37.974-1.257 3.7-2.378 7.49-3.34 11.33-5.997 24.068-5.398 49.993 11.766 67.323a93.715 93.715 0 007.029 6.227c3.928 3.218 7.905 6.424 11.03 10.3 7.28 9.017 9.211 20.756 10.296 32.099 1.425 15.086 1.236 31.775-9.516 44.175-11.153 12.875-30.519 17.317-48.211 18.232-27.498 1.457-54.442-3.316-81.339-6.956-26.898-3.641-54.739-6.141-81.787-.263a121.18 121.18 0 00-17.082 5.062 108.9 108.9 0 00-21.21 10.677c-9.622 6.318-17.826 14.22-23.006 23.613-11.123 20.092-39.488 28.645-62.664 24.15-22.115-4.288-39.921-20.774-44.019-40.738-4.538-22.229 6.615-44.308 16.332-66.515a358.83 358.83 0 003.437-8.081 238.988 238.988 0 001.795-4.513 165.185 165.185 0 002.828-7.947c4.39-13.591 6.016-28.984-2.295-40.321-4.658-6.347-11.477-10.355-19.238-13.393-17.388-6.801-39.481-8.722-52.38-21.167C22.84 94.854 21.359 76.92 30.502 63.74z",
                    }),
                    (0, a.createElement)("path", {
                      fill: "#F6F7F7",
                      d: "M124 33h267v185H124z",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M169 152.005V229a734.947 734.947 0 01-15.628-.991l-2.372-.181v-75.823c0-.395.072-.785.212-1.15.14-.365.345-.696.604-.975.258-.279.565-.5.903-.651a2.61 2.61 0 011.066-.229h12.43c.366 0 .728.078 1.066.229.338.151.645.372.903.651.259.279.464.61.604.975.14.365.212.755.212 1.15z",
                      opacity: ".7",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M186 229.733V127.377c0-.63.31-1.235.861-1.681.551-.446 1.299-.696 2.079-.696h13.12c.386 0 .768.061 1.125.181.357.119.681.294.954.515.273.221.489.483.637.771.148.289.224.598.224.91V230l-19-.267z",
                      opacity: ".5",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M225 230.002v-97.406a2.843 2.843 0 012.843-2.845h12.689a2.844 2.844 0 012.844 2.845v97.196l-18.376.21z",
                      opacity: ".7",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M282 88.368v140.224c-6 .145-12 .281-18 .408V88.368c0-.628.293-1.23.816-1.674.522-.445 1.231-.694 1.969-.694h12.43c.738 0 1.447.25 1.969.694.523.444.816 1.046.816 1.674z",
                      opacity: ".5",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M319 112.954v115.709c-6 .12-12 .232-18 .337V112.954c0-.518.293-1.015.816-1.382.522-.366 1.231-.572 1.969-.572h12.43c.738 0 1.447.206 1.969.572.523.367.816.864.816 1.382z",
                      opacity: ".7",
                    }),
                    (0, a.createElement)("path", {
                      stroke: "#CCC",
                      strokeLinecap: "round",
                      strokeMiterlimit: "10",
                      strokeWidth: "2",
                      d: "M160.125 133.501l41.91-46.767 41.91 23.545 41.91-72.248 41.909 34.511",
                    }),
                    (0, a.createElement)("path", {
                      className: "fill-theme-color",
                      d: "M160 139.005c2.761 0 5-2.24 5-5.003a5.002 5.002 0 00-5-5.002c-2.761 0-5 2.24-5 5.002a5.002 5.002 0 005 5.003zM201.5 93.007c4.142 0 7.5-3.36 7.5-7.504A7.502 7.502 0 00201.5 78c-4.142 0-7.5 3.36-7.5 7.504a7.502 7.502 0 007.5 7.503zM243.784 119.31c4.985 0 9.026-4.043 9.026-9.031s-4.041-9.031-9.026-9.031c-4.986 0-9.027 4.043-9.027 9.031s4.041 9.031 9.027 9.031zM286.027 46.062c4.985 0 9.027-4.043 9.027-9.031S291.012 28 286.027 28c-4.986 0-9.027 4.043-9.027 9.031s4.041 9.031 9.027 9.031zM327.5 80.007c4.142 0 7.5-3.36 7.5-7.504A7.502 7.502 0 00327.5 65c-4.142 0-7.5 3.36-7.5 7.504a7.502 7.502 0 007.5 7.503zM408 137l-36 2-18-30.926c5.588-3.326 12.033-5.083 18.606-5.074C392.154 103 408 118.222 408 137zM351.107 110l-.143.088c-7.887 4.836-13.573 12.518-15.859 21.429a35.211 35.211 0 003.603 26.338l.084.145L370 140.317 351.107 110zm-12.19 47.543a34.886 34.886 0 01-3.485-25.944c2.25-8.77 7.826-16.342 15.566-21.138l18.531 29.738-30.612 17.344zM408.664 138.651l-35.891 2.797 10.3 32.297.162-.046c7.808-2.265 14.585-6.957 19.211-13.301 4.626-6.344 6.824-13.96 6.23-21.588l-.012-.159zm-35.447 3.081l35.134-2.738c1.116 15.348-9.387 29.753-25.051 34.355l-10.083-31.617zM370.719 142.639l-30.714 17.335.088.131c3.977 5.942 9.926 10.554 16.982 13.165 7.056 2.61 14.849 3.083 22.245 1.349l.164-.038-8.765-31.942zm-30.249 17.435l30.034-16.951 8.57 31.234c-7.278 1.673-14.935 1.192-21.871-1.374-6.936-2.566-12.794-7.086-16.733-12.909z",
                    }),
                    (0, a.createElement)("path", {
                      fill: "#fff",
                      d: "M423 97h-17v-1h17v1zM423 101h-17v-3h17v3zM416 104h-17.979l-.05.068L384 122.821l.28.179 13.92-18.685H416V104z",
                    })
                  ),
                  (0, a.createElement)(
                    "defs",
                    null,
                    (0, a.createElement)(
                      "clipPath",
                      { id: "clip0" },
                      (0, a.createElement)("path", {
                        fill: "#fff",
                        d: "M0 0h517v160H0z",
                      })
                    )
                  )
                ),
              null
            ),
            content: (0, a.createElement)(Le, {
              title: (0, u.__)(
                "Good data leads to smart business decisions",
                "woocommerce"
              ),
              body: (0, u.__)(
                "Monitor your stats to improve performance, increase sales, and track your progress toward revenue goals. The more you know, the better you can serve your customers and grow your store.",
                "woocommerce"
              ),
            }),
          },
        ],
        Fe = ({ onClose: e }) => {
          const [t, o] = (0, a.useState)(!0);
          return (
            (0, a.useEffect)(() => {
              (0, w.recordEvent)("task_list_welcome_modal_open");
            }, []),
            (0, a.createElement)(
              a.Fragment,
              null,
              t &&
                (0, a.createElement)(h.Guide, {
                  onFinish: () => {
                    o(!1),
                      e(),
                      (0, w.recordEvent)("task_list_welcome_modal_close");
                  },
                  className: "woocommerce__welcome-modal",
                  finishButtonText: (0, u.__)("Let's go", "woocommerce"),
                  pages: Ie,
                })
            )
          );
        };
      var He = o(67027),
        Ue = o(98817);
      const qe = o.p + "93973815f7cd64d5f512.png",
        De = ({ body: e }) =>
          (0, a.createElement)(
            "div",
            { className: "mobile-app-modal-layout" },
            (0, a.createElement)(
              "div",
              { className: "mobile-app-modal-content" },
              e
            ),
            (0, a.createElement)(
              "div",
              { className: "mobile-app-modal-illustration" },
              (0, a.createElement)("img", {
                src: qe,
                alt: (0, u.__)(
                  "Screen captures of the WooCommerce mobile app",
                  "woocommerce"
                ),
              })
            )
          ),
        Be = "user-cannot-install",
        We = "not-owner-of-connection",
        Ve = "full-connection",
        Ze = "initializing",
        Ge = () => {
          const { currentUserCan: e } = (0, r.useUser)(),
            {
              canUserInstallPlugins: t,
              jetpackInstallState: o,
              jetpackConnectionData: c,
            } = (0, n.useSelect)((t) => {
              const { getPluginInstallState: o, getJetpackConnectionData: a } =
                  t(r.PLUGINS_STORE_NAME),
                c = o("jetpack");
              return {
                jetpackConnectionData: a(),
                jetpackInstallState: c,
                canUserInstallPlugins: e("install_plugins"),
              };
            }),
            { installJetpackAndConnect: l } = (0, n.useDispatch)(
              r.PLUGINS_STORE_NAME
            ),
            [s, i] = (0, a.useState)(Ze),
            m = (0, a.useCallback)(() => {
              const e = window.location.href;
              l(me, () => e + "&jetpackState=returning"), i("installing");
            }, [l]);
          return (
            (0, a.useEffect)(() => {
              if (t)
                switch (o) {
                  case "installed":
                    i("not-activated");
                    break;
                  case "unavailable":
                    i("not-installed");
                    break;
                  case "activated":
                    c && !c?.connectionOwner
                      ? i("userless-connection")
                      : c && !c?.currentUser?.isMaster
                      ? i(We)
                      : c &&
                        c?.currentUser?.isConnected &&
                        c?.currentUser?.isMaster &&
                        i(Ve);
                }
              else i(Be);
            }, [t, o, c]),
            { state: s, installHandler: m, jetpackConnectionData: c }
          );
        };
      var je = o(86989),
        Je = o.n(je);
      const $e = "fetching",
        Ye = "success",
        Qe = "error",
        Ke = ({ onClickHandler: e, isFetching: t }) =>
          (0, a.createElement)(
            h.Button,
            { className: "send-magic-link-button", onClick: e },
            t &&
              (0, a.createElement)(_.Spinner, {
                className: "send-magic-link-spinner",
              }),
            (0, a.createElement)(
              "div",
              {
                style: { visibility: t ? "hidden" : "visible" },
                className: "send-magic-link-button-contents",
              },
              (0, a.createElement)(
                "div",
                { className: "send-magic-link-button-text" },
                (0, u.__)("✨️ Send the sign-in link", "woocommerce")
              )
            )
          ),
        Xe = ({ returnToSendLinkPage: e }) =>
          (0, a.createElement)(
            "div",
            { className: "email-sent-modal-body" },
            (0, a.createElement)("div", {
              className: "email-sent-illustration",
            }),
            (0, a.createElement)(
              "div",
              { className: "email-sent-title" },
              (0, a.createElement)(
                "h1",
                null,
                (0, u.__)("Check your email!", "woocommerce")
              )
            ),
            (0, a.createElement)(
              "div",
              { className: "email-sent-subheader-spacer" },
              (0, a.createElement)(
                "div",
                { className: "email-sent-subheader" },
                (0, u.__)(
                  "We just sent you the magic link. Open it on your mobile device and follow the instructions.",
                  "woocommerce"
                )
              )
            ),
            (0, a.createElement)(
              "div",
              { className: "email-sent-footer" },
              (0, a.createElement)(
                "div",
                { className: "email-sent-footer-prompt" },
                (0, u.__)("DIDN’T GET IT?", "woocommerce")
              ),
              (0, a.createElement)(
                "div",
                { className: "email-sent-footer-text" },
                (0, y.Z)({
                  mixedString: (0, u.__)(
                    "Check your spam/junk email folder or {{ sendAnotherLink /}}.",
                    "woocommerce"
                  ),
                  components: {
                    sendAnotherLink: (0, a.createElement)(
                      h.Button,
                      {
                        className: "email-sent-send-another-link",
                        onClick: () => {
                          e();
                        },
                      },
                      (0, u.__)("send another link", "woocommerce")
                    ),
                  },
                })
              )
            )
          );
      o(99196);
      const et = ({ children: e }) =>
        (0, a.createElement)(
          "div",
          { className: "jetpack-installation-content" },
          (0, a.createElement)(
            "div",
            { className: "modal-layout-header" },
            (0, a.createElement)("div", { className: "woo-icon" }),
            (0, a.createElement)(
              "div",
              { className: "modal-header" },
              (0, a.createElement)(
                "h1",
                null,
                (0, u.__)(
                  "Manage orders and track sales in real-time with the free mobile app",
                  "woocommerce"
                )
              )
            )
          ),
          (0, a.createElement)("div", { className: "modal-layout-body" }, e),
          (0, a.createElement)(
            "div",
            { className: "modal-layout-footer" },
            (0, a.createElement)(
              "div",
              { className: "mobile-footer-icons" },
              (0, a.createElement)("div", { className: "apple-icon" }),
              (0, a.createElement)("div", { className: "android-icon" })
            ),
            (0, a.createElement)(
              "div",
              { className: "mobile-footer-blurb" },
              (0, u.__)(
                "The WooCommerce Mobile App is available on iOS and Android",
                "woocommerce"
              )
            )
          )
        );
      var tt = o(4210);
      const ot = () =>
          (0, a.createElement)(
            "div",
            null,
            (0, a.createElement)(tt.tv, {
              value:
                "https://woocommerce.com/mobile/?utm_source=wc_onboarding_mobile_task",
              size: 140,
            })
          ),
        at = ({ loginUrl: e }) =>
          (0, a.createElement)(
            "div",
            null,
            e &&
              (0, a.createElement)(
                "div",
                null,
                (0, a.createElement)(tt.tv, { value: e, size: 140 }),
                (0, a.createElement)(
                  "p",
                  null,
                  (0, u.__)(
                    "The app version needs to be 15.7 or above to sign in with this link.",
                    "woocommerce"
                  )
                )
              ),
            (0, a.createElement)(
              "div",
              null,
              (0, y.Z)({
                mixedString: (0, u.__)(
                  "Any troubles signing in? Check out the {{link}}FAQ{{/link}}.",
                  "woocommerce"
                ),
                components: {
                  link: (0, a.createElement)(_.Link, {
                    href: "https://woocommerce.com/document/android-ios-apps-login-help-faq/",
                    target: "_blank",
                    type: "external",
                    onClick: () => {
                      (0, w.recordEvent)("onboarding_app_login_faq_click");
                    },
                  }),
                  strong: (0, a.createElement)("strong", null),
                },
              })
            )
          ),
        ct = ({
          step: e,
          isJetpackPluginInstalled: t,
          wordpressAccountEmailAddress: o,
          completeInstallationStepHandler: c,
          sendMagicLinkHandler: n,
          sendMagicLinkStatus: r,
        }) => {
          const [l, s] = (0, a.useState)(void 0);
          return (
            (0, a.useEffect)(() => {
              if ("first" === e)
                s([
                  {
                    key: "first",
                    label: (0, u.__)("Install the mobile app", "woocommerce"),
                    description: (0, u.__)(
                      "Scan the code below to download or upgrade the app, or visit woo.com/mobile from your mobile device.",
                      "woocommerce"
                    ),
                    content: (0, a.createElement)(
                      a.Fragment,
                      null,
                      (0, a.createElement)(ot, null),
                      (0, a.createElement)(
                        h.Button,
                        {
                          variant: "primary",
                          className: "install-app-button",
                          onClick: () => {
                            c();
                          },
                        },
                        (0, u.__)("App is installed", "woocommerce")
                      )
                    ),
                  },
                  {
                    key: "second",
                    label: (0, u.__)("Sign into the app", "woocommerce"),
                    description: "",
                    content: (0, a.createElement)(a.Fragment, null),
                  },
                ]);
              else if ("second" === e)
                if (t && void 0 !== o)
                  s([
                    {
                      key: "first",
                      label: (0, u.__)("App installed", "woocommerce"),
                      description: "",
                      content: (0, a.createElement)(a.Fragment, null),
                    },
                    {
                      key: "second",
                      label: "Sign into the app",
                      description: (0, u.sprintf)(
                        (0, u.__)(
                          "We’ll send a magic link to %s. Open it on your smartphone or tablet to sign into your store instantly.",
                          "woocommerce"
                        ),
                        o
                      ),
                      content: (0, a.createElement)(Ke, {
                        isFetching: r === $e,
                        onClickHandler: n,
                      }),
                    },
                  ]);
                else {
                  const e = (0, N.O3)("siteUrl"),
                    t = (0, N.O3)("currentUserData").username,
                    o = `woocommerce://app-login?siteUrl=${encodeURIComponent(
                      e
                    )}&username=${encodeURIComponent(t)}`,
                    c = o
                      ? (0, u.__)(
                          "Scan the QR code below and enter the wp-admin password in the app.",
                          "woocommerce"
                        )
                      : (0, u.__)(
                          "Follow the instructions in the app to sign in.",
                          "woocommerce"
                        );
                  s([
                    {
                      key: "first",
                      label: (0, u.__)("App installed", "woocommerce"),
                      description: "",
                      content: (0, a.createElement)(a.Fragment, null),
                    },
                    {
                      key: "second",
                      label: "Sign into the app",
                      description: c,
                      content: (0, a.createElement)(at, { loginUrl: o }),
                    },
                  ]);
                }
            }, [e, t, o, c, n, r]),
            (0, a.createElement)(
              "div",
              { className: "login-stepper-wrapper" },
              l &&
                (0, a.createElement)(_.Stepper, {
                  isVertical: !0,
                  currentStep: e,
                  steps: l,
                })
            )
          );
        },
        nt = ({
          appInstalledClicked: e,
          isJetpackPluginInstalled: t,
          wordpressAccountEmailAddress: o,
          completeInstallationHandler: c,
          sendMagicLinkHandler: n,
          sendMagicLinkStatus: r,
        }) =>
          (0, a.createElement)(
            et,
            null,
            (0, a.createElement)(
              "div",
              { className: "modal-subheader" },
              (0, a.createElement)(
                "h3",
                null,
                (0, u.__)(
                  "Run your store from anywhere in two easy steps.",
                  "woocommerce"
                )
              )
            ),
            (0, a.createElement)(ct, {
              step: e ? "second" : "first",
              isJetpackPluginInstalled: t,
              wordpressAccountEmailAddress: o,
              completeInstallationStepHandler: c,
              sendMagicLinkHandler: n,
              sendMagicLinkStatus: r,
            })
          );
      var rt = o(16422);
      const lt = () => {
          const [e, t] = (0, a.useState)(!1),
            [o, c] = (0, a.useState)(!1),
            { state: s, jetpackConnectionData: i } = Ge(),
            { updateOptions: m } = (0, n.useDispatch)(r.OPTIONS_STORE_NAME),
            [d, p] = (0, a.useState)(),
            [_] = (0, He.lr)();
          (0, a.useEffect)(() => {
            _.get("mobileAppModal") ? t(!0) : t(!1),
              "returning" === _.get("jetpackState") && c(!0);
          }, [_]);
          const [g, E] = (0, a.useState)(!1),
            [v, y] = (0, a.useState)(!1),
            [k, f] = (0, a.useState)(!1),
            { requestState: b, fetchMagicLinkApiCall: N } = (() => {
              const [e, t] = (0, a.useState)("initializing"),
                { createNotice: o } = (0, n.useDispatch)("core/notices");
              return {
                requestState: e,
                fetchMagicLinkApiCall: (0, a.useCallback)(() => {
                  t($e),
                    Je()({
                      path: `${r.WC_ADMIN_NAMESPACE}/mobile-app/send-magic-link`,
                    })
                      .then((e) => {
                        "success" === e.code
                          ? t(Ye)
                          : (t(Qe),
                            o(
                              "error",
                              (0, u.__)(
                                "Sorry, an unknown error occurred.",
                                "woocommerce"
                              )
                            ));
                      })
                      .catch((e) => {
                        t(Qe),
                          (0, w.recordEvent)(
                            "magic_prompt_send_magic_link_error",
                            { error: e.message, code: e.code }
                          ),
                          "error_sending_mobile_magic_link" === e.code
                            ? o(
                                "error",
                                (0, u.__)(
                                  "We couldn't send the link. Try again in a few seconds.",
                                  "woocommerce"
                                )
                              )
                            : "invalid_user_permission_view_admin" === e.code
                            ? o(
                                "error",
                                (0, u.__)(
                                  "Sorry, your account doesn't have sufficient permission.",
                                  "woocommerce"
                                )
                              )
                            : "jetpack_not_connected" === e.code
                            ? o("error", e.message)
                            : o(
                                "error",
                                "We couldn't send the link. Try again in a few seconds."
                              );
                      });
                }, [o]),
              };
            })(),
            S = (0, a.useCallback)(() => {
              E(!0), (0, w.recordEvent)("onboarding_app_install_click");
            }, []),
            C = (0, a.useCallback)(() => {
              N(), (0, w.recordEvent)("magic_prompt_send_signin_link_click");
            }, [N]);
          return (
            (0, a.useEffect)(() => {
              b === Ye && y(!0);
            }, [b]),
            (0, a.useEffect)(() => {
              if (v)
                p(
                  (0, a.createElement)(Xe, {
                    returnToSendLinkPage: () => {
                      y(!1),
                        f(!0),
                        (0, w.recordEvent)(
                          "magic_prompt_retry_send_signin_link"
                        );
                    },
                  })
                );
              else {
                var e;
                const t =
                    null !==
                      (e =
                        s === Ve &&
                        void 0 !== i?.currentUser?.wpcomUser?.email) &&
                    void 0 !== e &&
                    e,
                  o = i?.currentUser?.wpcomUser?.email;
                p(
                  (0, a.createElement)(nt, {
                    appInstalledClicked: g,
                    isJetpackPluginInstalled: t,
                    wordpressAccountEmailAddress: o,
                    completeInstallationHandler: S,
                    sendMagicLinkHandler: C,
                    sendMagicLinkStatus: b,
                  })
                );
              }
            }, [g, C, v, o, i?.currentUser?.wpcomUser?.email, s, k, b]),
            (0, a.createElement)(
              a.Fragment,
              null,
              e &&
                (0, a.createElement)(h.Guide, {
                  onFinish: () => {
                    m({ woocommerce_admin_dismissed_mobile_app_modal: "yes" }),
                      (0, l.updateQueryString)(
                        { jetpackState: void 0, mobileAppModal: void 0 },
                        void 0,
                        Object.fromEntries(_.entries())
                      );
                  },
                  className: "woocommerce__mobile-app-welcome-modal",
                  pages: [{ content: (0, a.createElement)(De, { body: d }) }],
                })
            )
          );
        },
        st = "wc/admin/mobile-app-help-entry-callback";
      (0, Ue.registerPlugin)("woocommerce-mobile-app-modal", {
        render: () => {
          const { state: e } = Ge(),
            t = (0, a.useCallback)(
              (t) =>
                e === Ze || e === Be || e === We
                  ? t
                  : [
                      ...t,
                      {
                        title: (0, u.__)(
                          "Get the WooCommerce app",
                          "woocommerce"
                        ),
                        link: (0, k.getAdminLink)(
                          "./admin.php?page=wc-admin&mobileAppModal=true"
                        ),
                        linkType: "wc-admin",
                      },
                    ],
              [e]
            );
          return (
            (0, a.useEffect)(() => {
              (0, ae.removeFilter)(rt.SETUP_TASK_HELP_ITEMS_FILTER, st),
                (0, ae.addFilter)(rt.SETUP_TASK_HELP_ITEMS_FILTER, st, t, 10);
            }, [t]),
            null
          );
        },
        scope: "woocommerce-admin",
      });
      const it = "woocommerce_homescreen_experimental_header_banner_item",
        mt = ({ children: e, order: t = 1 }) =>
          (0, a.createElement)(h.Fill, { name: it }, (o) =>
            (0, _.createOrderedChildren)(e, t, o)
          );
      mt.Slot = ({ fillProps: e }) =>
        (0, a.createElement)(
          h.Slot,
          { name: it, fillProps: e },
          _.sortFillsByOrder
        );
      const dt = ({ className: e }) => {
          const t = (0, $.useSlot)(it);
          return Boolean(t?.fills?.length)
            ? (0, a.createElement)(
                "div",
                { className: i()("woocommerce-homescreen__header", e) },
                (0, a.createElement)(mt.Slot, null)
              )
            : null;
        },
        ut = "experimental_woocommerce_wcpay_feature",
        pt = ({ children: e, order: t = 1 }) =>
          (0, a.createElement)(h.Fill, { name: ut }, (o) =>
            (0, _.createOrderedChildren)(e, t, o)
          );
      pt.Slot = ({ fillProps: e }) =>
        (0, a.createElement)(
          h.Slot,
          { name: ut, fillProps: e },
          _.sortFillsByOrder
        );
      const _t = ({ className: e }) => {
          const t = (0, $.useSlot)(ut);
          return Boolean(t?.fills?.length)
            ? (0, a.createElement)(
                "div",
                { className: i()("woocommerce-homescreen__header", e) },
                (0, a.createElement)(pt.Slot, null)
              )
            : null;
        },
        ht = (0, a.lazy)(() =>
          Promise.resolve()
            .then(o.bind(o, 47529))
            .then((e) => ({ default: e.TaskLists }))
        ),
        wt = ({
          defaultHomescreenLayout: e,
          query: t,
          taskListComplete: o,
          hasTaskList: c,
          showingProgressHeader: n,
          isLoadingTaskLists: l,
          shouldShowWelcomeModal: s,
          shouldShowWelcomeFromCalypsoModal: m,
          isTaskListHidden: d,
          updateOptions: _,
        }) => {
          var h;
          const w = (0, r.useUserPreferences)(),
            g = o || d,
            E = o || d,
            v = g || window.wcAdminFeatures.analytics,
            y = !t.task,
            k = (0, Ae.useActiveSetupTasklist)(),
            f = "two_columns" === (w.homepage_layout || e) && v,
            b = (0, a.useRef)(!0),
            N = (0, a.useCallback)(() => {
              b.current = window.innerWidth >= 782;
            }, []);
          (0, a.useLayoutEffect)(
            () => (
              N(),
              window.addEventListener("resize", N),
              () => {
                window.removeEventListener("resize", N);
              }
            ),
            [N]
          );
          const S = b.current && f,
            C = null !== (h = t.mobileAppModal) && void 0 !== h && h,
            M = () =>
              (0, a.createElement)(
                a.Suspense,
                {
                  fallback: (0, a.createElement)(Ae.TasksPlaceholder, {
                    query: t,
                  }),
                },
                k &&
                  y &&
                  (0, a.createElement)(
                    a.Fragment,
                    null,
                    (0, a.createElement)(Ae.ProgressTitle, { taskListId: k })
                  ),
                (0, a.createElement)(ht, { query: t })
              );
          return (0, a.createElement)(
            a.Fragment,
            null,
            y &&
              (0, a.createElement)(dt, {
                className: i()("woocommerce-homescreen", {
                  "woocommerce-homescreen-column": !f,
                }),
              }),
            (0, a.createElement)(
              "div",
              {
                className: i()("woocommerce-homescreen", { "two-columns": f }),
              },
              y
                ? (0, a.createElement)(
                    a.Fragment,
                    null,
                    (0, a.createElement)(
                      j,
                      { shouldStick: S },
                      !l &&
                        !n &&
                        (0, a.createElement)(p.Z, {
                          className: "your-store-today",
                          title: (0, u.__)("Your store today", "woocommerce"),
                          subtitle: (0, u.__)(
                            "To do's, tips, and insights for your business",
                            "woocommerce"
                          ),
                        }),
                      E && (0, a.createElement)(_t, null),
                      d && (0, a.createElement)(G, null),
                      c && M(),
                      (0, a.createElement)(J.Z, null)
                    ),
                    (0, a.createElement)(
                      j,
                      { shouldStick: S },
                      window.wcAdminFeatures.analytics &&
                        (0, a.createElement)(we, null),
                      g && (0, a.createElement)(Re, null)
                    )
                  )
                : M(),
              s &&
                (0, a.createElement)(Fe, {
                  onClose: () => {
                    _({ [X]: "yes" });
                  },
                }),
              m &&
                (0, a.createElement)(xe, {
                  onClose: () => {
                    _({ [ee]: "yes" });
                  },
                }),
              C && (0, a.createElement)(lt, null),
              window.wcAdminFeatures.navigation &&
                (0, a.createElement)(oe, null)
            )
          );
        };
      wt.propTypes = {
        taskListComplete: d().bool,
        hasTaskList: d().bool,
        query: d().object.isRequired,
        shouldShowWelcomeModal: d().bool,
        shouldShowWelcomeFromCalypsoModal: d().bool,
        installTimestamp: d().string,
        installTimestampHasResolved: d().bool,
        updateOptions: d().func.isRequired,
      };
      const gt = (0, c.compose)(
          (0, n.withSelect)((e) => {
            const { isNotesRequesting: t } = e(r.NOTES_STORE_NAME),
              { getOption: o, hasFinishedResolution: a } = e(
                r.OPTIONS_STORE_NAME
              ),
              {
                getTaskList: c,
                getTaskLists: n,
                hasFinishedResolution: l,
              } = e(r.ONBOARDING_STORE_NAME),
              s = n(),
              i = !l("getTaskLists"),
              m = "no" !== o(ee),
              d = a("getOption", [ee]),
              u = !!window.location.search.match("from-calypso"),
              p = d && !m && u,
              _ = "no" !== o(X),
              h = a("getOption", [X]) && !_ && d && !m;
            return {
              defaultHomescreenLayout:
                o("woocommerce_default_homepage_layout") || "single_column",
              isBatchUpdating: t("batchUpdateNotes"),
              shouldShowWelcomeModal: h,
              shouldShowWelcomeFromCalypsoModal: p,
              isLoadingTaskLists: i,
              isTaskListHidden: c("setup")?.isHidden,
              hasTaskList: (0, N.O3)("visibleTaskListIds", []).length > 0,
              showingProgressHeader: !!s.find(
                (e) => e.isVisible && e.displayProgressHeader
              ),
              taskListComplete: c("setup")?.isComplete,
            };
          }),
          (0, n.withDispatch)((e) => ({
            updateOptions: e(r.OPTIONS_STORE_NAME).updateOptions,
          }))
        )(wt),
        Et = (0, N.O3)("onboarding", {}),
        vt = (0, c.compose)(
          (0, r.withOnboardingHydration)({ profileItems: Et.profile }),
          (0, n.withSelect)((e) => {
            const { getProfileItems: t, hasFinishedResolution: o } = e(
              r.ONBOARDING_STORE_NAME
            );
            return {
              profileItems: t(),
              hasFinishedResolution: o("getProfileItems", []),
            };
          })
        )(
          ({
            profileItems: { completed: e, skipped: t } = {},
            hasFinishedResolution: o,
          }) => {
            (0, a.useEffect)(() => {
              !o ||
                e ||
                t ||
                (0, l.getHistory)().push(
                  (0, l.getNewPath)({}, "/setup-wizard", {})
                );
            }, [o, e, t]);
            const c = (0, l.useQuery)();
            return (0, a.createElement)(gt, { query: c });
          }
        );
    },
    11927: (e, t, o) => {
      o.d(t, { Z: () => N });
      var a = o(69307),
        c = o(65736),
        n = o(86020),
        r = o(55609),
        l = o(67221),
        s = o(9818),
        i = o(14599),
        m = o(57371),
        d = o(55248),
        u = o(14812),
        p = o(76292),
        _ = o.n(p),
        h = o(41407),
        w = o(43477),
        g = o(14841);
      const E = ({ onClose: e }) => {
          const { createNotice: t } = (0, s.useDispatch)("core/notices"),
            { batchUpdateNotes: o, removeAllNotes: n } = (0, s.useDispatch)(
              l.NOTES_STORE_NAME
            );
          return (0, a.createElement)(
            a.Fragment,
            null,
            (0, a.createElement)(
              r.Modal,
              {
                title: (0, c.__)("Dismiss all messages", "woocommerce"),
                className: "woocommerce-inbox-dismiss-all-modal",
                onRequestClose: e,
              },
              (0, a.createElement)(
                "div",
                { className: "woocommerce-inbox-dismiss-all-modal__wrapper" },
                (0, a.createElement)(
                  "div",
                  { className: "woocommerce-usage-modal__message" },
                  (0, c.__)(
                    "Are you sure? Inbox messages will be dismissed forever.",
                    "woocommerce"
                  )
                ),
                (0, a.createElement)(
                  "div",
                  { className: "woocommerce-usage-modal__actions" },
                  (0, a.createElement)(
                    r.Button,
                    { onClick: e },
                    (0, c.__)("Cancel", "woocommerce")
                  ),
                  (0, a.createElement)(
                    r.Button,
                    {
                      isPrimary: !0,
                      onClick: () => {
                        (async () => {
                          (0, i.recordEvent)(
                            "wcadmin_inbox_action_dismissall",
                            {}
                          );
                          try {
                            const e = await n({ status: "unactioned" });
                            t(
                              "success",
                              (0, c.__)(
                                "All messages dismissed",
                                "woocommerce"
                              ),
                              {
                                actions: [
                                  {
                                    label: (0, c.__)("Undo", "woocommerce"),
                                    onClick: () => {
                                      o(
                                        e.map((e) => e.id),
                                        { is_deleted: 0 }
                                      );
                                    },
                                  },
                                ],
                              }
                            );
                          } catch (o) {
                            t(
                              "error",
                              (0, c.__)(
                                "Messages could not be dismissed",
                                "woocommerce"
                              )
                            ),
                              e();
                          }
                        })(),
                          e();
                      },
                    },
                    (0, c.__)("Yes, dismiss all", "woocommerce")
                  )
                )
              )
            )
          );
        },
        v = {
          page: 1,
          per_page: 5,
          status: "unactioned",
          type: l.QUERY_DEFAULTS.noteTypes,
          orderby: "date",
          order: "desc",
          _fields: [
            "id",
            "name",
            "title",
            "content",
            "type",
            "status",
            "actions",
            "date_created",
            "date_created_gmt",
            "layout",
            "image",
            "is_deleted",
            "is_read",
            "locale",
          ],
        },
        y = ["en_US", "en_AU", "en_CA", "en_GB", "en_ZA"],
        k = _()("2022-01-11", "YYYY-MM-DD").valueOf(),
        f = (e, t) => {
          (0, i.recordEvent)("inbox_action_click", {
            note_name: e.name,
            note_title: e.title,
            note_content_inner_link: t,
          });
        };
      let b = !1;
      const N = ({ showHeader: e = !0 }) => {
        const [t, o] = (0, a.useState)(v.per_page),
          [p, N] = (0, a.useState)(!1),
          [S, C] = (0, a.useState)([]),
          [M, T] = (0, a.useState)({}),
          { createNotice: z } = (0, s.useDispatch)("core/notices"),
          {
            removeNote: R,
            updateNote: A,
            triggerNoteAction: P,
            invalidateResolutionForStoreSelector: L,
          } = (0, s.useDispatch)(l.NOTES_STORE_NAME),
          O = (0, g.GG)(),
          x = (0, a.useMemo)(() => ({ ...v, per_page: t }), [t]),
          {
            isError: I,
            notes: F,
            notesHaveResolved: H,
            isBatchUpdating: U,
            unreadNotesCount: q,
          } = (0, s.useSelect)((e) => {
            const {
              getNotes: t,
              getNotesError: o,
              isNotesRequesting: a,
              hasFinishedResolution: c,
            } = e(l.NOTES_STORE_NAME);
            return {
              notes: t(x),
              unreadNotesCount: t({ ...v, is_read: !1, per_page: -1 }).length,
              isError: Boolean(o("getNotes", [x])),
              isBatchUpdating: a("batchUpdateNotes"),
              notesHaveResolved: !a("batchUpdateNotes") && c("getNotes", [x]),
            };
          });
        (0, a.useEffect)(() => {
          H && F.length < t && N(!0),
            H &&
              F.length &&
              C(
                F.map((e) => {
                  const t = _()(e.date_created_gmt, "YYYY-MM-DD").valueOf();
                  return y.includes(e.locale) && t >= k
                    ? { ...e, content: (0, w.r7)(e.content, 320) }
                    : e;
                })
              );
        }, [F, H]);
        const [D, B] = (0, a.useState)(!1);
        if (I) {
          const e = (0, c.__)(
              "There was an error getting your inbox. Please try again.",
              "woocommerce"
            ),
            t = (0, c.__)("Reload", "woocommerce"),
            o = () => {
              window.location.reload();
            };
          return (0, a.createElement)(n.EmptyContent, {
            title: e,
            actionLabel: t,
            actionURL: null,
            actionCallback: o,
          });
        }
        return H && !S.length
          ? null
          : (0, a.createElement)(
              a.Fragment,
              null,
              D &&
                (0, a.createElement)(E, {
                  onClose: () => {
                    B(!1);
                  },
                }),
              (0, a.createElement)(
                "div",
                { className: "woocommerce-homepage-notes-wrapper" },
                !H &&
                  !S.length &&
                  (0, a.createElement)(
                    n.Section,
                    null,
                    (0, a.createElement)(u.InboxNotePlaceholder, {
                      className: "banner message-is-unread",
                    })
                  ),
                (0, a.createElement)(
                  n.Section,
                  null,
                  Boolean(S.length) &&
                    (({
                      hasNotes: e,
                      isBatchUpdating: t,
                      notes: o,
                      onDismiss: l,
                      onNoteActionClick: s,
                      onNoteVisible: p,
                      setShowDismissAllModal: _,
                      showHeader: w = !0,
                      loadMoreNotes: g,
                      allNotesFetched: E,
                      notesHaveResolved: y,
                      unreadNotesCount: k,
                    }) => {
                      if (t) return;
                      if (!e)
                        return (0, a.createElement)(
                          h.U,
                          {
                            className: "woocommerce-empty-activity-card",
                            title: (0, c.__)(
                              "Your inbox is empty",
                              "woocommerce"
                            ),
                            icon: !1,
                          },
                          (0, c.__)(
                            "As things begin to happen in your store your inbox will start to fill up. You'll see things like achievements, new feature announcements, extension recommendations and more!",
                            "woocommerce"
                          )
                        );
                      b ||
                        ((0, i.recordEvent)("inbox_panel_view", {
                          total: o.length,
                        }),
                        (b = !0));
                      const N = Object.keys(o).map((e) => o[e]);
                      return (0, a.createElement)(
                        r.Card,
                        { size: "large" },
                        w &&
                          (0, a.createElement)(
                            r.CardHeader,
                            { size: "medium" },
                            (0, a.createElement)(
                              "div",
                              { className: "wooocommerce-inbox-card__header" },
                              (0, a.createElement)(
                                u.Text,
                                {
                                  size: "20",
                                  lineHeight: "28px",
                                  variant: "title.small",
                                },
                                (0, c.__)("Inbox", "woocommerce")
                              ),
                              (0, a.createElement)(n.Badge, { count: k })
                            ),
                            (0, a.createElement)(n.EllipsisMenu, {
                              label: (0, c.__)(
                                "Inbox Notes Options",
                                "woocommerce"
                              ),
                              renderContent: ({ onToggle: e }) =>
                                (0, a.createElement)(
                                  "div",
                                  {
                                    className:
                                      "woocommerce-inbox-card__section-controls",
                                  },
                                  (0, a.createElement)(
                                    r.Button,
                                    {
                                      onClick: () => {
                                        _(!0), e();
                                      },
                                    },
                                    (0, c.__)("Dismiss all", "woocommerce")
                                  )
                                ),
                            })
                          ),
                        (0, a.createElement)(
                          m.Z,
                          { role: "menu" },
                          N.map((e) => {
                            const { id: t, is_deleted: o } = e;
                            return o
                              ? null
                              : (0, a.createElement)(
                                  d.Z,
                                  {
                                    key: t,
                                    timeout: 500,
                                    classNames: "woocommerce-inbox-message",
                                  },
                                  (0, a.createElement)(u.InboxNoteCard, {
                                    key: t,
                                    note: e,
                                    onDismiss: l,
                                    onNoteActionClick: s,
                                    onBodyLinkClick: f,
                                    onNoteVisible: p,
                                  })
                                );
                          })
                        ),
                        E
                          ? null
                          : y
                          ? (0, a.createElement)(
                              r.CardFooter,
                              {
                                className: "wooocommerce-inbox-card__footer",
                                size: "medium",
                              },
                              (0, a.createElement)(
                                r.Button,
                                {
                                  isPrimary: !0,
                                  onClick: () => {
                                    g();
                                  },
                                },
                                N.length > v.per_page
                                  ? (0, c.__)("Show more", "woocommerce")
                                  : (0, c.__)("Show older", "woocommerce")
                              )
                            )
                          : (0, a.createElement)(u.InboxNotePlaceholder, {
                              className: "banner message-is-unread",
                            })
                      );
                    })({
                      loadMoreNotes: () => {
                        (0, i.recordEvent)("inbox_action_load_more", {
                          quantity_shown: S.length,
                        }),
                          o(t + 10);
                      },
                      hasNotes: (0, w.kS)(S),
                      isBatchUpdating: U,
                      notes: S,
                      onDismiss: async (e) => {
                        (0, i.recordEvent)("inbox_action_dismiss", {
                          note_name: e.name,
                          note_title: e.title,
                          note_name_dismiss_all: !1,
                          note_name_dismiss_confirmation: !0,
                          screen: O,
                        });
                        const t = e.id;
                        try {
                          await R(t),
                            L("getNotes"),
                            z(
                              "success",
                              (0, c.__)("Message dismissed", "woocommerce"),
                              {
                                actions: [
                                  {
                                    label: (0, c.__)("Undo", "woocommerce"),
                                    onClick: async () => {
                                      await A(t, { is_deleted: 0 }),
                                        L("getNotes");
                                    },
                                  },
                                ],
                              }
                            );
                        } catch (e) {
                          z(
                            "error",
                            (0, c._n)(
                              "Message could not be dismissed",
                              "Messages could not be dismissed",
                              1,
                              "woocommerce"
                            )
                          );
                        }
                      },
                      onNoteActionClick: (e, t) => {
                        P(e.id, t.id);
                      },
                      onNoteVisible: (e) => {
                        M[e.id] ||
                          e.is_read ||
                          (T({ ...M, [e.id]: !0 }),
                          setTimeout(() => {
                            A(e.id, { is_read: !0 });
                          }, 3e3)),
                          (0, i.recordEvent)("inbox_note_view", {
                            note_content: e.content,
                            note_name: e.name,
                            note_title: e.title,
                            note_type: e.type,
                            screen: O,
                          });
                      },
                      setShowDismissAllModal: B,
                      showHeader: e,
                      allNotesFetched: p,
                      notesHaveResolved: H,
                      unreadNotesCount: q,
                    })
                )
              )
            );
      };
    },
  },
]);
