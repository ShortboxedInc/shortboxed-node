/**
 * (c) Shortboxed Inc. and its affiliates. Confidential and proprietary.
 */
import {COMIC_SEARCH_PATH} from "../constants";
import {HttpMethod} from "../enums/http-method.enum";
import {Shortboxed} from "../index";

describe("Shortboxed", () => {
  let shortboxedClient: Shortboxed;
  let sendRequestSpy: jest.SpyInstance;

  beforeAll(() => {
    shortboxedClient = new Shortboxed("YOUR_API_KEY");
    sendRequestSpy = jest
      .spyOn(Shortboxed.prototype, "sendRequest")
      .mockResolvedValue({issueId: "12345"});
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

      expect(sendRequestSpy).toHaveBeenCalledTimes(1);
      expect(sendRequestSpy).toHaveBeenCalledWith(
        COMIC_SEARCH_PATH,
        HttpMethod.POST,
        params,
      );
      expect(response).toEqual({issueId: "12345"});
    });
  });
});
