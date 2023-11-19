import { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsData = (state: StateSchema) => state?.articeleDetails?.data;
export const getArticleDetailsError = (state: StateSchema) => state?.articeleDetails?.error;
export const getArticleDetailsIsLoading = (state: StateSchema) => state?.articeleDetails?.isLoading;