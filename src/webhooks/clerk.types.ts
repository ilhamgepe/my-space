export type ClerkWebhookMessage = {
  data: {
    birthday: string;
    created_at?: number;
    deleted?: boolean;
    email_addresses: Array<{
      email_address: string;
      id: string;
      linked_to: Array<any>;
      object: string;
      verification: {
        status: string;
        strategy: string;
      };
    }>;
    external_accounts: Array<any>;
    external_id: string;
    first_name: string;
    gender: string;
    id: string;
    image_url: string;
    last_name: string;
    last_sign_in_at: number;
    object: string;
    password_enabled: boolean;
    phone_numbers: Array<any>;
    primary_email_address_id: string;
    primary_phone_number_id: any;
    primary_web3_wallet_id: any;
    private_metadata: Record<any, any>;
    profile_image_url: string;
    public_metadata: Record<any, any>;
    two_factor_enabled: boolean;
    unsafe_metadata: Record<any, any>;
    updated_at: number;
    username: any;
    web3_wallets: Array<any>;
  };
  object: string;
  type: 'user.updated' | 'user.deleted' | 'user.created';
};
