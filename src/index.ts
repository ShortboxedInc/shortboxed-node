/**
 * (c) Shortboxed Inc. and its affiliates. Confidential and proprietary.
 */
import {COMIC_SEARCH_PATH, SHORTBOXED_API_URL} from "./constants";
import {HttpMethod} from "./enums/http-method.enum";
import {IComicSearchResponse} from "./interfaces/comic-search.response";
import {ICreateComicSearchInput} from "./interfaces/comic-search.input";
import axios from "axios";

export class Shortboxed {
  constructor(private apiKey: string) {}

  async sendRequest<TRequest, TResponse>(
    path: string,
    httpMethod: HttpMethod,
    data: TRequest,
  ): Promise<TResponse> {
    let response = null;
    const headers = {
      "Content-Type": "application/json",
      "User-Agent": "Shortboxed Node SDK",
      "X-API-KEY": this.apiKey,
    };

    const url = `${SHORTBOXED_API_URL}${path}`;

    await axios({
      data,
      headers,
      method: httpMethod,
      responseType: "json",
      url,
    })
      .then(res => (response = res.data))
      .catch(error => {
        throw new Error(error);
      });

    return response as TResponse;
  }

  public async comicSearch(
    input: ICreateComicSearchInput,
  ): Promise<IComicSearchResponse> {
    return await this.sendRequest<
      ICreateComicSearchInput,
      IComicSearchResponse
    >(COMIC_SEARCH_PATH, HttpMethod.POST, input);
  }
}
