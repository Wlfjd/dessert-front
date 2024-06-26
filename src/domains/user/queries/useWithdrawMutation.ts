import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import usePopup from '@/shared/hooks/usePopup';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import PATH from '@/shared/constants/path';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

interface WithdrawResponse {
  message: string;
}

const useWithdrawMutation = () => {
  const router = useRouter();
  const { closePopup } = usePopup();
  const { openToast } = useToastNewVer();

  const mutationFn = async ({ formData }: { formData: FormData }) => {
    const rawFormData = {
      reasons: formData.getAll('delete-reason').join(',')
    };

    const res = await fetchExtend.patch('/members', {
      body: JSON.stringify(rawFormData)
    });
    const { result, success, message, code }: ResultResponse<WithdrawResponse> = await res.json();

    if (!res.ok || !success) {
      throwApiError({ code, message });
    }

    return result;
  };

  const onSuccess = ({ message }: { message: string }) => {
    openToast({ message });
    router.push(PATH.home);
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({
    mutationFn,
    onSettled: closePopup,
    onSuccess,
    onError,
    throwOnError: true
  });
};

export default useWithdrawMutation;
