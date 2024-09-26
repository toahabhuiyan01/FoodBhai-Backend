import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        export interface ActivationTimeRange {
            /**
             * Opening time
             */
            from?: string;
            /**
             * Closing time
             */
            to?: string;
        }
        export interface LocationPrecise {
            /**
             * Latitude of the shop
             */
            latitude: string;
            /**
             * Longitude of the shop
             */
            longitude: string;
        }
        export interface LoginResponse {
            /**
             * JWT token for the user
             */
            accessToken: string;
            /**
             * Refresh token for the user
             */
            refreshToken?: string;
        }
        export interface LoginWithCreds {
            /**
             * Phone number of the user
             */
            phoneNumber: string;
            /**
             * Password of the user
             */
            password: string;
        }
        export interface LoginWithRefreshtoken {
            /**
             * Refresh token of the user
             */
            refreshToken: string;
        }
        /**
         * Rating of the shop or user
         */
        export type Rating = number;
        export interface RatingPatch {
            rating?: /* Rating of the shop or user */ Rating;
            /**
             * Comment for the rating
             */
            comment?: string;
        }
        /**
         * A refresh token allows you to generate access tokens to access
         * A refresh token will expire and become invalidated after 14 days of no activity.
         *
         */
        export interface RefreshToken {
            token: string;
            userId: string;
            createdAt: Timestamp /* date-time */;
            expiresAt: Timestamp /* date-time */;
        }
        export interface Shop {
            id: /* ID of the shop */ ShopId /* uuid */;
            ownerId: /* ID of the user */ UserId /* uuid */;
            /**
             * URL of the shop's profile image
             */
            profileImage?: string;
            /**
             * URL of the shop's cover image
             */
            coverImage?: string;
            /**
             * Bio of the shop
             */
            shopBio?: string;
            /**
             * Name of the shop
             */
            name: string;
            /**
             * Location of the shop
             */
            location?: string;
            locationPrecise?: LocationPrecise;
            /**
             * Rating of the shop
             */
            rating: number;
            activeTimeRange?: ("anytime" | "not-specified") | ActivationTimeRange;
        }
        export interface ShopCreatePatch {
            /**
             * URL of the shop's profile image
             */
            profileImage?: string;
            /**
             * URL of the shop's cover image
             */
            coverImage?: string;
            /**
             * Bio of the shop
             */
            shopBio?: string;
            /**
             * Name of the shop
             */
            name?: string;
            /**
             * Location of the shop
             */
            location?: string;
            locationPrecise?: LocationPrecise;
            /**
             * Rating of the shop
             */
            rating?: number;
            activeTimeRange?: ("anytime" | "not-specified") | ActivationTimeRange;
        }
        /**
         * ID of the shop
         */
        export type ShopId = string; // uuid
        export type Timestamp = string; // date-time
        export interface User {
            id: /* ID of the user */ UserId /* uuid */;
            name: /* Name of the user */ UserName;
            /**
             * Email of the user
             */
            email: string;
            createdAt: Timestamp /* date-time */;
            /**
             * Phone number of the user
             */
            phoneNumber: string;
            /**
             * URL of the user's profile image
             */
            profileImage?: string;
            /**
             * Location of the user
             */
            location?: string;
            locationPrecise?: LocationPrecise;
            rating?: /* Rating of the shop or user */ Rating;
        }
        /**
         * ID of the user
         */
        export type UserId = string; // uuid
        export interface UserLogin {
            /**
             * Phone number of the user
             */
            phoneNumber: string;
            /**
             * Password of the user
             */
            password: string;
        }
        /**
         * Name of the user
         */
        export type UserName = string;
        export interface UserPatch {
            name?: /* Name of the user */ UserName;
            /**
             * Email of the user
             */
            email?: string;
            /**
             * Phone number of the user
             */
            phoneNumber?: string;
            /**
             * URL of the user's profile image
             */
            profileImage?: string;
            /**
             * Location of the user
             */
            location?: string;
            locationPrecise?: LocationPrecise;
            rating?: RatingPatch;
        }
        export interface UserRegister {
            name: /* Name of the user */ UserName;
            /**
             * Email of the user
             */
            email: string;
            /**
             * Phone number of the user
             */
            phoneNumber: string;
            /**
             * Password of the user
             */
            password: string;
        }
    }
}
declare namespace Paths {
    namespace CreateShop {
        export type RequestBody = Components.Schemas.ShopCreatePatch;
        namespace Responses {
            export type $200 = Components.Schemas.Shop;
        }
    }
    namespace DeleteShop {
        namespace Parameters {
            export type ShopId = string;
        }
        export interface PathParameters {
            shopId: Parameters.ShopId;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * Shop deleted successfully
                 */
                success?: boolean;
            }
        }
    }
    namespace GetShops {
        namespace Parameters {
            export type Id = string[];
        }
        export interface QueryParameters {
            id?: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                shops?: Components.Schemas.Shop[];
            }
        }
    }
    namespace LoginUser {
        export type RequestBody = Components.Schemas.LoginWithCreds | Components.Schemas.LoginWithRefreshtoken;
        namespace Responses {
            export type $200 = Components.Schemas.LoginResponse;
        }
    }
    namespace RegisterUser {
        export type RequestBody = Components.Schemas.UserRegister;
        namespace Responses {
            export interface $200 {
                /**
                 * User registered successfully
                 */
                success?: boolean;
            }
        }
    }
    namespace UpdateShop {
        namespace Parameters {
            export type ShopId = string;
        }
        export interface PathParameters {
            shopId: Parameters.ShopId;
        }
        export type RequestBody = Components.Schemas.ShopCreatePatch;
        namespace Responses {
            export type $200 = Components.Schemas.Shop;
        }
    }
}

export interface OperationMethods {
  /**
   * getShops - Get all available shops
   */
  'getShops'(
    parameters?: Parameters<Paths.GetShops.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetShops.Responses.$200>
  /**
   * createShop - Create a new shop
   */
  'createShop'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateShop.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateShop.Responses.$200>
  /**
   * updateShop - Update a shop
   */
  'updateShop'(
    parameters?: Parameters<Paths.UpdateShop.PathParameters> | null,
    data?: Paths.UpdateShop.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateShop.Responses.$200>
  /**
   * deleteShop - Delete a shop
   */
  'deleteShop'(
    parameters?: Parameters<Paths.DeleteShop.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteShop.Responses.$200>
  /**
   * registerUser - Register a new user
   */
  'registerUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.RegisterUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RegisterUser.Responses.$200>
  /**
   * loginUser - Login a user
   */
  'loginUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.LoginUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LoginUser.Responses.$200>
}

export interface PathsDictionary {
  ['/shops']: {
    /**
     * getShops - Get all available shops
     */
    'get'(
      parameters?: Parameters<Paths.GetShops.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetShops.Responses.$200>
    /**
     * createShop - Create a new shop
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateShop.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateShop.Responses.$200>
  }
  ['/shops/{shopId}']: {
    /**
     * updateShop - Update a shop
     */
    'patch'(
      parameters?: Parameters<Paths.UpdateShop.PathParameters> | null,
      data?: Paths.UpdateShop.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateShop.Responses.$200>
    /**
     * deleteShop - Delete a shop
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteShop.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteShop.Responses.$200>
  }
  ['/register']: {
    /**
     * registerUser - Register a new user
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.RegisterUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RegisterUser.Responses.$200>
  }
  ['/login']: {
    /**
     * loginUser - Login a user
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.LoginUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LoginUser.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

export type ActivationTimeRange = Components.Schemas.ActivationTimeRange;
export type LocationPrecise = Components.Schemas.LocationPrecise;
export type LoginResponse = Components.Schemas.LoginResponse;
export type LoginWithCreds = Components.Schemas.LoginWithCreds;
export type LoginWithRefreshtoken = Components.Schemas.LoginWithRefreshtoken;
export type Rating = Components.Schemas.Rating;
export type RatingPatch = Components.Schemas.RatingPatch;
export type RefreshToken = Components.Schemas.RefreshToken;
export type Shop = Components.Schemas.Shop;
export type ShopCreatePatch = Components.Schemas.ShopCreatePatch;
export type ShopId = Components.Schemas.ShopId;
export type Timestamp = Components.Schemas.Timestamp;
export type User = Components.Schemas.User;
export type UserId = Components.Schemas.UserId;
export type UserLogin = Components.Schemas.UserLogin;
export type UserName = Components.Schemas.UserName;
export type UserPatch = Components.Schemas.UserPatch;
export type UserRegister = Components.Schemas.UserRegister;