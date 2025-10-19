import { data } from '../';

export const getMember = (id) => data.members.find((m) => m.id === id);
