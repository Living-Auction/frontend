interface Profilecard {
  uuid: string;
  nickName: string;
  img?: string;
  is_online?: boolean;
  last_seen_at?: string;
}

interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  phone: string;
  profileImg: string;
  nickName: string;
  location: string;
  verified: boolean;
}
