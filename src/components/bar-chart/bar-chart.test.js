import React from "react";
import { render } from "@testing-library/react";
import Chart from "./bar-chart";

// test('renders learn react link', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

// })

test("renders learn react link", () => {
  const { getByText } = render(<Chart />);
  expect(getByText(/learn/i)).toBeInTheDocument();
});
