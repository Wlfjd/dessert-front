import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import { NicknameDoubleCheckResponse } from '../types/profile';

const useNicknameDoubleCheckMutation = () => {
  const mutationFn = async (nickname: string) => {
    const res = await fetchExtend.get(`/profile/doublecheck?nickname=${nickname}`);
    if (!res.ok) throw new Error('닉네임 중복 체크 실패');
    const data: NicknameDoubleCheckResponse = await res.json();
    return data;
  };

  return useMutation({
    mutationFn
  });
};

export default useNicknameDoubleCheckMutation;