import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "./index";

let originalFetch;

beforeEach(() => {
  originalFetch = global.fetch;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          CategoryGames: [
            {
              Games: [
                {
                  GameID: 1007,
                  GameName: "Multi Hand Blackjack",
                  ImageUrlGame:
                    "/img/Casino/Games/UXCasino/TableGames/Blackjack/PRNGMHBlackjack500x350.png",
                },
              ],
            },
          ],
        }),
    })
  );
});

afterEach(() => {
  global.fetch = originalFetch;
});

test("Load data", async () => {
  render(<Home />);

  const game = await screen.findAllByText("Multi Hand Blackjack");

  expect(game).toBeDefined();
});
