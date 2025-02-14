/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/shops": {
        parameters: {
        };
        /** Get all available shops */
        get: operations["getShops"];
        /** Create a new shop */
        post: operations["createShop"];
    };
    "/shops/{shopId}": {
        parameters: {
        };
        /** Delete a shop */
        delete: operations["deleteShop"];
        /** Update a shop */
        patch: operations["updateShop"];
    };
    "/register": {
        parameters: {
        };
        /** Register a new user */
        post: operations["registerUser"];
    };
    "/login": {
        parameters: {
        };
        /** Login a user */
        post: operations["loginUser"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Format: date-time */
        Timestamp: string;
        /**
         * Format: uuid
         * @description ID of the user
         */
        UserId: string;
        /** @description Name of the user */
        UserName: string;
        /**
         * Format: uuid
         * @description ID of the shop
         */
        ShopId: string;
        LocationPrecise: {
            /** @description Latitude of the shop */
            latitude: string;
            /** @description Longitude of the shop */
            longitude: string;
        };
        ActivationTimeRange: {
            /** @description Opening time */
            from?: string;
            /** @description Closing time */
            to?: string;
        };
        /** @description Rating of the shop or user */
        Rating: number;
        /** @description Review count */
        Review: number;
        LoginWithCreds: {
            /** @description Phone number of the user */
            phoneNumber: string;
            /** @description Password of the user */
            password: string;
        };
        LoginWithRefreshtoken: {
            /** @description Refresh token of the user */
            refreshToken: string;
        };
        RatingPatch: {
            rating?: components["schemas"]["Rating"];
            /** @description Comment for the rating */
            comment?: string;
        };
        /**
         * Format: uuid
         * @description ID of the product
         */
        ProductId: string;
        /** @description Name of the product */
        ProductName: string;
        /** @description Description of the product */
        ProductDescription: string;
        /** @description Category of the product */
        ProductCategory: string;
        /** @description SKU of the product */
        ProductSku: string;
        /** @description Slug of the product */
        ProductSlug: string;
        /** @description Tags of the product */
        ProductTags: string[];
        ProductImage: {
            /** @description URL of the image */
            url: string;
            /** @description Alt text for the image */
            alt?: string;
        };
        ProductPrice: {
            /** @description Price of the product */
            price: number;
            /** @description Currency of the price */
            currency: string;
            /** @description Discount on the product */
            discount?: number;
            /** @description Final price of the product */
            finalPrice?: number;
        };
        ProductStockQuantity: {
            /** @description Quantity of the product */
            quantity: number;
        };
        ProductStockPreOrder: {
            availability?: string;
        };
        ProductStock: components["schemas"]["ProductStockQuantity"] | components["schemas"]["ProductStockPreOrder"];
        ProductPromotion: {
            startDate: components["schemas"]["Timestamp"];
            endDate: components["schemas"]["Timestamp"];
            /** @description Discount percentage */
            discountPercentage?: number;
            /** @description Discount amount */
            discountAmount?: number;
        };
        ProductAttributes: {
            [key: string]: unknown;
        };
        ProductVariant: {
            /** @description Color of the product */
            color?: string;
            /** @description Size of the product */
            size?: string;
            stock?: components["schemas"]["ProductStock"];
            images?: components["schemas"]["ProductImage"][];
        };
        Product: {
            id?: components["schemas"]["ProductId"];
            name?: components["schemas"]["ProductName"];
            description?: components["schemas"]["ProductDescription"];
            images?: components["schemas"]["ProductImage"][];
            category?: components["schemas"]["ProductCategory"];
            sku?: components["schemas"]["ProductSku"];
            Rating?: components["schemas"]["Rating"];
            reviews?: components["schemas"]["Review"];
            price?: components["schemas"]["ProductPrice"];
            stock?: components["schemas"]["ProductStock"];
            variants?: components["schemas"]["ProductVariant"][];
            attributes?: components["schemas"]["ProductAttributes"];
            promotion?: components["schemas"]["ProductPromotion"];
            shopId?: components["schemas"]["ShopId"];
            ownerId?: components["schemas"]["UserId"];
        };
        UserRegister: {
            name: components["schemas"]["UserName"];
            /** @description Email of the user */
            email: string;
            /** @description Phone number of the user */
            phoneNumber: string;
            /** @description Password of the user */
            password: string;
        };
        LoginResponse: {
            /** @description JWT token for the user */
            accessToken: string;
            /** @description Refresh token for the user */
            refreshToken?: string;
        };
        User: {
            id: components["schemas"]["UserId"];
            name: components["schemas"]["UserName"];
            /** @description Email of the user */
            email: string;
            createdAt: components["schemas"]["Timestamp"];
            /** @description Phone number of the user */
            phoneNumber: string;
            /** @description URL of the user's profile image */
            profileImage?: string;
            /** @description Location of the user */
            location?: string;
            locationPrecise?: components["schemas"]["LocationPrecise"];
            rating?: components["schemas"]["Rating"];
        };
        UserPatch: {
            name?: components["schemas"]["UserName"];
            /** @description Email of the user */
            email?: string;
            /** @description Phone number of the user */
            phoneNumber?: string;
            /** @description URL of the user's profile image */
            profileImage?: string;
            /** @description Location of the user */
            location?: string;
            locationPrecise?: components["schemas"]["LocationPrecise"];
            rating?: components["schemas"]["RatingPatch"];
        };
        Shop: {
            id: components["schemas"]["ShopId"];
            ownerId: components["schemas"]["UserId"];
            /** @description URL of the shop's profile image */
            profileImage?: string;
            /** @description URL of the shop's cover image */
            coverImage?: string;
            /** @description Bio of the shop */
            shopBio?: string;
            /** @description Name of the shop */
            name: string;
            /** @description Location of the shop */
            location?: string;
            locationPrecise?: components["schemas"]["LocationPrecise"];
            /** @description Rating of the shop */
            rating: number;
            activeTimeRange?: ("anytime" | "not-specified") | components["schemas"]["ActivationTimeRange"];
        };
        ShopCreatePatch: {
            /** @description URL of the shop's profile image */
            profileImage?: string;
            /** @description URL of the shop's cover image */
            coverImage?: string;
            /** @description Bio of the shop */
            shopBio?: string;
            /** @description Name of the shop */
            name?: string;
            /** @description Location of the shop */
            location?: string;
            locationPrecise?: components["schemas"]["LocationPrecise"];
            /** @description Rating of the shop */
            rating?: number;
            activeTimeRange?: ("anytime" | "not-specified") | components["schemas"]["ActivationTimeRange"];
        };
        /** @description A refresh token allows you to generate access tokens to access
         *     A refresh token will expire and become invalidated after 14 days of no activity.
         *      */
        RefreshToken: {
            token: string;
            userId: string;
            createdAt: components["schemas"]["Timestamp"];
            expiresAt: components["schemas"]["Timestamp"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type SchemaTimestamp = components['schemas']['Timestamp'];
export type SchemaUserId = components['schemas']['UserId'];
export type SchemaUserName = components['schemas']['UserName'];
export type SchemaShopId = components['schemas']['ShopId'];
export type SchemaLocationPrecise = components['schemas']['LocationPrecise'];
export type SchemaActivationTimeRange = components['schemas']['ActivationTimeRange'];
export type SchemaRating = components['schemas']['Rating'];
export type SchemaReview = components['schemas']['Review'];
export type SchemaLoginWithCreds = components['schemas']['LoginWithCreds'];
export type SchemaLoginWithRefreshtoken = components['schemas']['LoginWithRefreshtoken'];
export type SchemaRatingPatch = components['schemas']['RatingPatch'];
export type SchemaProductId = components['schemas']['ProductId'];
export type SchemaProductName = components['schemas']['ProductName'];
export type SchemaProductDescription = components['schemas']['ProductDescription'];
export type SchemaProductCategory = components['schemas']['ProductCategory'];
export type SchemaProductSku = components['schemas']['ProductSku'];
export type SchemaProductSlug = components['schemas']['ProductSlug'];
export type SchemaProductTags = components['schemas']['ProductTags'];
export type SchemaProductImage = components['schemas']['ProductImage'];
export type SchemaProductPrice = components['schemas']['ProductPrice'];
export type SchemaProductStockQuantity = components['schemas']['ProductStockQuantity'];
export type SchemaProductStockPreOrder = components['schemas']['ProductStockPreOrder'];
export type SchemaProductStock = components['schemas']['ProductStock'];
export type SchemaProductPromotion = components['schemas']['ProductPromotion'];
export type SchemaProductAttributes = components['schemas']['ProductAttributes'];
export type SchemaProductVariant = components['schemas']['ProductVariant'];
export type SchemaProduct = components['schemas']['Product'];
export type SchemaUserRegister = components['schemas']['UserRegister'];
export type SchemaLoginResponse = components['schemas']['LoginResponse'];
export type SchemaUser = components['schemas']['User'];
export type SchemaUserPatch = components['schemas']['UserPatch'];
export type SchemaShop = components['schemas']['Shop'];
export type SchemaShopCreatePatch = components['schemas']['ShopCreatePatch'];
export type SchemaRefreshToken = components['schemas']['RefreshToken'];
export type $defs = Record<string, never>;
export interface operations {
    getShops: {
        parameters: {
            query?: {
                id?: string[];
            };
        };
        responses: {
            /** @description A list of shops */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        shops?: components["schemas"]["Shop"][];
                    };
                };
            };
        };
    };
    createShop: {
        parameters: {
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ShopCreatePatch"];
            };
        };
        responses: {
            /** @description Shop created successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Shop"];
                };
            };
        };
    };
    deleteShop: {
        parameters: {
            path: {
                shopId: string;
            };
        };
        responses: {
            /** @description Shop deleted successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Shop deleted successfully */
                        success?: boolean;
                    };
                };
            };
        };
    };
    updateShop: {
        parameters: {
            path: {
                shopId: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ShopCreatePatch"];
            };
        };
        responses: {
            /** @description Shop updated successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Shop"];
                };
            };
        };
    };
    registerUser: {
        parameters: {
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserRegister"];
            };
        };
        responses: {
            /** @description User registered successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description User registered successfully */
                        success?: boolean;
                    };
                };
            };
        };
    };
    loginUser: {
        parameters: {
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LoginWithCreds"] | components["schemas"]["LoginWithRefreshtoken"];
            };
        };
        responses: {
            /** @description User logged in successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LoginResponse"];
                };
            };
        };
    };
}