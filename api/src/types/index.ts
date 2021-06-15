interface MerchantCustomerSupport {}

interface Metadata {
  merchant_defined: boolean;
}

interface VisualCodes {}

interface TextualCodes {}

interface Instructions {}

interface PaymentMethodOptions {}

interface Payment {
  id: string;
  amount: number;
  original_amount: number;
  is_partial: boolean;
  currency_code: string;
  country_code: string;
  status: string;
  description: string;
  merchant_reference_id: string;
  customer_token: string;
  expiration: number;
  captured: boolean;
  refunded: boolean;
  refunded_amount: number;
  receipt_email: string;
  redirect_url: string;
  complete_payment_url: string;
  error_payment_url: string;
  receipt_number: string;
  flow_type: string;
  address?: any;
  statement_descriptor: string;
  transaction_id: string;
  created_at: number;
  updated_at: number;
  metadata: Metadata;
  failure_code: string;
  failure_message: string;
  paid: boolean;
  paid_at: number;
  dispute?: any;
  refunds?: any;
  order?: any;
  outcome?: any;
  visual_codes: VisualCodes;
  textual_codes: TextualCodes;
  instructions: Instructions;
  ewallet_id?: any;
  ewallets: any[];
  payment_method_options: PaymentMethodOptions;
  payment_method_type: string;
  payment_method_type_category: string;
  fx_rate: string;
  merchant_requested_currency?: any;
  merchant_requested_amount?: any;
  payment_fees?: any;
  invoice: string;
  escrow?: any;
}

interface CustomElements {
  save_card_default: boolean;
  display_description: boolean;
  payment_fees_display: boolean;
  merchant_currency_only: boolean;
  billing_address_collect: boolean;
  cardholder_preferred_currency: boolean;
  merchant_color?: any;
}

export interface RootObject {
  success: boolean;
  id: string;
  status: string;
  cancel_url: string;
  complete_url: string;
  language: string;
  merchant_color: string;
  merchant_logo: string;
  merchant_website: string;
  merchant_language: string;
  merchant_customer_support: MerchantCustomerSupport;
  merchant_alias: string;
  merchant_terms: string;
  merchant_privacy_policy: string;
  page_expiration: number;
  redirect_url: string;
  cancel_checkout_url: string;
  complete_checkout_url: string;
  country: string;
  currency: string;
  amount: number;
  payment: Payment;
  payment_method_type: string;
  payment_method_type_categories?: any;
  payment_method_types_include?: any;
  payment_method_types_exclude?: any;
  customer: string;
  customer_data?: any;
  country_name: string;
  custom_elements: CustomElements;
  timestamp: number;
  payment_expiration?: any;
  cart_items: any[];
  complete_checkout_auto_redirect: boolean;
  region: string;
  escrow?: any;
  escrow_release_days?: any;
}
