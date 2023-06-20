import {renderWidgetForecast, renderWidgetToday, renderWidgetTodayOther} from "./render.js";

export const startWidget = () => {
  const widget = document.createElement('div');
  widget.classList.add('widget');

  renderWidgetToday(widget)
  renderWidgetTodayOther(widget)
  renderWidgetForecast(widget)

  return widget
};
