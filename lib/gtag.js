export const GA_TRACKING_ID = "G-ZC1JZB4DT6" || process.env.NEXT_PUBLIC_GA_ID;

export const pageView = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
