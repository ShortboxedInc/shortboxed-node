/**
 * (c) Shortboxed Inc. and its affiliates. Confidential and proprietary.
 */
import {Shortboxed} from "../src/index";
import * as axios from "axios";

jest.mock("axios");

describe("Shortboxed", () => {
  let shortboxedClient: Shortboxed;

  beforeAll(() => {
    shortboxedClient = new Shortboxed("YOUR_API_KEY");
    jest.spyOn(axios, 'default').mockResolvedValue({data: {issueId: "12345"}});
  });

  describe("ComicSearch", () => {
    it("should make the call through the client", async () => {
      const params = {
        issueNumber: "1",
        publisher: "Marvel Comics",
        title: "Amazing Spider-man",
        year: 1963,
      };

      const response = await shortboxedClient.comicSearch(params);

      expect(response).toEqual({issueId: "12345"});
    });
  });
});
