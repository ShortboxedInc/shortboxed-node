/**
 * (c) Shortboxed Inc. and its affiliates. Confidential and proprietary.
 */
import {Shortboxed} from "../src/index";
import * as axios from "axios";
import { ICreateComicSearchInput } from "../src/interfaces/comic-search.input";

jest.mock("axios");

describe("Shortboxed Client", () => {
  let shortboxedClient: Shortboxed;
  let axiosSpy: jest.SpyInstance;
  const comicSearchParams: ICreateComicSearchInput =  {
    issueNumber: "1",
    publisher: "Marvel Comics",
    title: "Amazing Spider-man",
    year: 1963,
  }

  beforeAll(() => {
    shortboxedClient = new Shortboxed("YOUR_API_KEY");
    axiosSpy = jest.spyOn(axios, 'default');
  });

  it('throws', async () => {
    const error = new Error('oh no');
    axiosSpy.mockRejectedValue(error);
  
    try {
      await shortboxedClient.comicSearch(comicSearchParams);
    } catch (error) {
      expect(error).toEqual(error);
    }
  });

  describe("ComicSearch", () => {
    it("should make the call through the client", async () => {
      axiosSpy.mockResolvedValue({data: {issueId: "12345"}});

      const response = await shortboxedClient.comicSearch(comicSearchParams);

      expect(response).toEqual({issueId: "12345"});
    });
  });
});
