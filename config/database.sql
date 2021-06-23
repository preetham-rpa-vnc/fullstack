create table users (
    user_id bigserial not null constraint users_pkey primary key,
    user_name varchar(48) not null constraint users_user_name_key unique,
    hashedpassword varchar(200),
    user_type_id smallint not null,
    user_status_id smallint not null,
    created_at timestamp default now(),
    updated_at timestamp default now()
);

alter table
    users owner to testuser;

create table user_profile (
    user_profile_id bigserial not null constraint user_profile_pkey primary key,
    first_name varchar(48),
    last_name varchar(48),
    user_mobile bigint,
    mobile bigint,
    name varchar(48),
    email varchar(48),
    created_at timestamp default now(),
    updated_at timestamp default now()
);

alter table
    user_profile owner to testuser;

create table user_type (
    user_type_id smallserial not null constraint user_type_pkey primary key,
    user_type_name varchar(48) not null constraint user_type_user_type_name_key unique
);

alter table
    user_type owner to testuser;

create table authentication_type (
    auth_type_id smallserial not null constraint authentication_type_pkey primary key,
    auth_provider varchar(48) not null constraint authentication_type_auth_provider_key unique
);

alter table
    authentication_type owner to testuser;

create table address (
    address_id bigserial not null constraint address_pkey primary key,
    city_id integer,
    state_id integer,
    country_id integer,
    address_line_1 varchar,
    address_line_2 varchar,
    created_at timestamp default now(),
    updated_at timestamp default now()
);

alter table
    address owner to testuser;

create table user_address (
    user_id integer not null constraint user_address_user_id_fkey references users,
    address_id integer not null constraint user_address_address_id_fkey references address,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    constraint user_address_pkey primary key (user_id, address_id)
);

alter table
    user_address owner to testuser;

create table media_types (
    media_type_id smallserial not null constraint media_types_pkey primary key,
    media_type varchar(48) not null constraint media_types_media_type_key unique
);

alter table
    media_types owner to testuser;

create table manufacture (
    manufacture_id smallserial not null constraint manufacture_pkey primary key,
    manufacture_name varchar not null constraint manufacture_manufacture_name_key unique
);

alter table
    manufacture owner to testuser;

create table products (
    product_id bigserial not null constraint products_pkey primary key,
    product_model varchar(128),
    manufacture_id integer constraint products_manufacture_id_fkey references manufacture,
    product_price double precision not null,
    product_default_language_id integer
);

alter table
    products owner to testuser;

create table product_media (
    product_id integer not null constraint product_media_product_id_fkey references products,
    media_type_id integer not null constraint product_media_media_type_id_fkey references media_types,
    show_order integer default 0,
    created_at timestamp default now(),
    media_source varchar,
    updated_at timestamp default now(),
    media_path text not null,
    constraint product_media_pkey primary key (product_id, media_type_id)
);

alter table
    product_media owner to testuser;

create table languages (
    language_id smallserial not null constraint languages_pkey primary key,
    language_code varchar(8) not null constraint languages_language_code_key unique,
    language_description text
);

alter table
    languages owner to testuser;

create table product_detail (
    product_id integer not null,
    product_name varchar not null,
    product_description text,
    phase_of_crop varchar(128) not null,
    product_use text,
    product_prebuilt varchar(12)
);

alter table
    product_detail owner to testuser;

create table product_description_locale (
    product_description_locale_id bigserial not null constraint product_description_locale_pkey primary key,
    product_id integer constraint product_description_locale_product_id_fkey references products,
    locale_description text,
    language_id integer not null constraint product_description_locale_language_id_fkey references languages
);

alter table
    product_description_locale owner to testuser;

create table categories (
    category_id smallserial not null constraint categories_pkey primary key,
    category_name varchar(128) not null constraint categories_category_name_key unique,
    category_description text
);

alter table
    categories owner to testuser;

create table product_categories (
    product_category_id smallserial not null constraint product_categories_pkey primary key,
    product_id integer constraint product_categories_product_id_fkey references products,
    category_id integer constraint product_categories_category_id_fkey references categories
);

alter table
    product_categories owner to testuser;

create table product_listing (
    product_listing_id bigserial not null constraint product_listing_pkey primary key,
    undeliverable_zip_codes integer [],
    product_id integer constraint product_listing_product_id_fkey references products
);

alter table
    product_listing owner to testuser;

create table if not exists cropDetails (
    Slno integer,
    StateName varchar,
    DistrictName text,
    MarketName varchar(128),
    Commodity text,
    Variety varchar(12),
    Grade varchar(12),
    MinPrice integer,
    MaxPrice integer,
    ModalPrice integer,
    PriceDate date
);

alter table
    cropDetails owner to testuser;
-- create table cropDetails (
--     Slno integer,
--     StateName varchar,
--     DistrictName text,
--     MarketName varchar(128),
--     Commodity text,
--     Variety varchar(12),
--     Grade varchar(12),
--     MinPrice integer,
--     MaxPrice integer,
--     ModalPrice integer,
--     PriceDate date
-- );

-- alter table
--     cropDetails owner to testuser;

