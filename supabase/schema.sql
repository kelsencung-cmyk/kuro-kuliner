create table if not exists menus (
  id text primary key,
  name text not null,
  description text,
  price int not null,
  category text,
  image text,
  stock int default 0
);

create table if not exists orders (
  id text primary key,
  items jsonb not null,
  total int not null,
  status text not null default 'paid',
  buyer_name text,
  buyer_phone text,
  address text,
  note text,
  created_at timestamptz default now()
);
