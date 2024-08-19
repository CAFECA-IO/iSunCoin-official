import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useGlobalCtx } from '@/contexts/global_context';
import { ToastId } from '@/constants/toastify';
import { ToastPosition, ToastType } from '@/interfaces/toastify';
import { ISUNCOIN_API_V1 } from '@/constants/url';

const ContactForm = () => {
  const { t } = useTranslation('common');
  const { toastHandler } = useGlobalCtx();

  // Info: (20240809 - Julian) 信件送出的時間
  const now = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

  // Info: (20240809 - Julian) form input state
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [detailInput, setDetailInput] = useState('');
  // Info: (20240809 - Julian) verify format
  const [emailIsValid, setEmailIsValid] = useState(true);
  // Info: (20240809 - Julian) sending
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    // Info: (20240809 - Julian) 驗證信箱格式
    const emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    setEmailIsValid(emailInput === '' || emailRule.test(emailInput));
  }, [emailInput]);

  const handleFirstNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameInput(event.target.value);
  };
  const handleLastNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameInput(event.target.value);
  };
  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
  };
  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneInput(event.target.value);
  };
  const handleDetailInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetailInput(event.target.value);
  };

  const successProcess = () => {
    // Info: (20240815 - Julian) 成功的土司
    toastHandler({
      id: ToastId.CONTACT_SUCCESS,
      type: ToastType.SUCCESS,
      content: t('TOAST.CONTACT_SENT_SUCCESS'),
      closeable: true,
      position: ToastPosition.BOTTOM_LEFT,
    });

    // Info: (20240809 - Julian) 清空 input
    setFirstNameInput('');
    setLastNameInput('');
    setEmailInput('');
    setPhoneInput('');
    setDetailInput('');
    setIsSending(false);
  };

  const failedProcess = () => {
    // Info: (20240815 - Julian) 失敗的土司
    toastHandler({
      id: ToastId.CONTACT_ERROR,
      type: ToastType.ERROR,
      content: t('TOAST.CONTACT_SENT_ERROR'),
      closeable: true,
      position: ToastPosition.BOTTOM_LEFT,
    });
    setIsSending(false);
  };

  // Info: (20240809 - Julian) 按下送出按鈕後做的事
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    // Info: (20240809 - Julian) 先驗證信箱格式，不符合就直接 return
    if (!emailIsValid) return;

    // Info: (20240809 - Julian) 送出中
    setIsSending(true);

    try {
      event.preventDefault();

      const emailData = {
        comment: `<h3>姓名：${firstNameInput} ${lastNameInput}</h3><h3>電話：${phoneInput}</h3><h3>電郵：${emailInput}</h3><h3>回饋：${detailInput}</h3><p>${now}<p>`,
      };

      // Info: (20240809 - Julian) call API
      const res = await fetch(ISUNCOIN_API_V1.EMAIL, {
        method: 'POST',
        body: JSON.stringify(emailData),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const result = await res.json();

      const { success } = result;

      if (success) {
        successProcess();
      } else {
        failedProcess();
      }
    } catch (error) {
      failedProcess();
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col-reverse items-center justify-center gap-12px bg-surface-neutral-main-background px-80px py-40px md:flex-row"
    >
      {/* Info:(20240809 - Julian) Form ticket */}
      <div className="flex w-90vw flex-col gap-48px rounded-lg bg-stroke-neutral-invert p-48px font-semibold text-input-text-primary shadow-downDropShadowM md:w-550px">
        <h2 className="text-44px">{t('HOME_PAGE.CONTACT_TITLE')}</h2>
        {/* Info:(20240809 - Julian) Form */}
        <form
          onSubmit={submitHandler}
          className="relative grid flex-1 grid-flow-row grid-cols-2 gap-24px"
        >
          {/* Info:(20240809 - Julian) Sending animation */}
          <div
            className={`absolute bg-stroke-neutral-invert ${isSending ? 'flex' : 'hidden'} h-full w-full flex-1 items-center justify-center`}
          >
            <Image src="/animations/loading.gif" alt="loading_animation" width={100} height={100} />
          </div>
          {/* Info:(20240809 - Julian) First Name */}
          <div className="flex flex-col gap-8px text-sm">
            <p>{t('HOME_PAGE.CONTACT_FIRST_NAME')}</p>
            <input
              id="first-name-input"
              type="text"
              value={firstNameInput}
              onChange={handleFirstNameInput}
              placeholder={t('HOME_PAGE.CONTACT_FIRST_NAME')}
              required
              className="w-full rounded-sm border border-input-stroke-input p-8px px-12px py-10px font-medium outline-none"
            />
          </div>
          {/* Info:(20240809 - Julian) Last Name */}
          <div className="flex flex-col gap-8px text-sm">
            <p>{t('HOME_PAGE.CONTACT_LAST_NAME')}</p>
            <input
              id="last-name-input"
              type="text"
              value={lastNameInput}
              onChange={handleLastNameInput}
              placeholder={t('HOME_PAGE.CONTACT_LAST_NAME')}
              required
              className="w-full rounded-sm border border-input-stroke-input p-8px px-12px py-10px font-medium outline-none"
            />
          </div>
          {/* Info:(20240809 - Julian) Email */}
          <div className="col-span-2 flex flex-col gap-8px text-sm">
            <p>
              {t('HOME_PAGE.CONTACT_EMAIL')}
              <span
                className={`${emailIsValid ? 'opacity-0' : 'opacity-100'} ml-10px text-xs text-rose-500`}
              >
                {t('HOME_PAGE.CONTACT_EMAIL_VERIFY')}
              </span>
            </p>
            <input
              id="email-input"
              type="text"
              value={emailInput}
              onChange={handleEmailInput}
              placeholder="xxxx@xmail.com"
              required
              className="w-full rounded-sm border border-input-stroke-input p-8px px-12px py-10px font-medium outline-none"
            />
          </div>
          {/* Info:(20240809 - Julian) Phone Number */}
          <div className="col-span-2 flex flex-col gap-8px text-sm">
            <p>{t('HOME_PAGE.CONTACT_PHONE')}</p>
            <input
              id="phone-input"
              type="text"
              value={phoneInput}
              onChange={handlePhoneInput}
              placeholder="0000-000-000"
              required
              className="w-full rounded-sm border border-input-stroke-input p-8px px-12px py-10px font-medium outline-none"
            />
          </div>
          {/* Info:(20240809 - Julian) Detail */}
          <div className="col-span-2 flex flex-col gap-8px text-sm">
            <p>{t('HOME_PAGE.CONTACT_DETAIL')}</p>
            <textarea
              id="detail-input"
              value={detailInput}
              onChange={handleDetailInput}
              rows={4}
              placeholder={t('HOME_PAGE.CONTACT_DETAIL_PLACEHOLDER')}
              required
              className="w-full rounded-sm border border-input-stroke-input p-8px px-12px py-10px font-medium outline-none"
            />
          </div>
          {/* Info:(20240809 - Julian) Submit */}
          <div className="col-span-2 ml-auto font-medium">
            <button
              id="contract-form-submit"
              type="submit"
              disabled={!emailIsValid}
              className="flex items-center gap-8px rounded-xs bg-button-surface-strong-primary px-24px py-10px text-button-text-primary-solid hover:bg-button-surface-strong-primary-hover disabled:bg-button-surface-strong-disable disabled:text-button-text-disable"
            >
              <p className="text-base">{t('HOME_PAGE.CONTACT_SUBMIT')}</p>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.0033 6.02104L14.0503 21.2755C14.0339 21.3175 14.0184 21.3573 14.0037 21.3949C13.989 21.3573 13.9735 21.3175 13.9571 21.2754L11.3788 14.6455L20.0033 6.02104ZM10.3182 13.5848L18.9426 4.96038L3.68816 10.9133C3.64614 10.9297 3.60639 10.9453 3.56878 10.96C3.60641 10.9747 3.64617 10.9902 3.68822 11.0065L10.3182 13.5848ZM20.7198 2.67542C20.8962 2.6242 21.2 2.54952 21.5183 2.65585C21.8909 2.78033 22.1833 3.07275 22.3078 3.44537C22.4141 3.76365 22.3395 4.06751 22.2882 4.24384C22.2335 4.43237 22.1443 4.66072 22.0491 4.9048L22.038 4.93307L15.4477 21.8208L15.4364 21.8498C15.3301 22.1223 15.2328 22.3715 15.1392 22.5609C15.0556 22.7301 14.8956 23.0288 14.5795 23.193C14.2178 23.3809 13.7872 23.3807 13.4257 23.1923C13.1098 23.0278 12.9502 22.7288 12.8668 22.5595C12.7733 22.37 12.6764 22.1208 12.5704 21.8482L12.5591 21.8191L9.93103 15.0611C9.9282 15.0538 9.92555 15.047 9.92305 15.0406C9.91663 15.0381 9.90982 15.0355 9.90255 15.0326L3.14455 12.4045L3.11554 12.3932C2.8429 12.2872 2.59362 12.1903 2.40412 12.0969C2.23485 12.0135 1.9359 11.8539 1.77132 11.538C1.58298 11.1765 1.58272 10.7459 1.77064 10.3841C1.93485 10.0681 2.23361 9.90811 2.40278 9.82447C2.59217 9.73082 2.84132 9.63362 3.11382 9.5273L3.14285 9.51597L20.0306 2.92563L20.059 2.91456C20.303 2.8193 20.5313 2.73017 20.7198 2.67542Z"
                    className="fill-current"
                  />
                </g>
              </svg>
            </button>
          </div>
        </form>
      </div>
      {/* Info:(20240809 - Julian) Image */}
      <div>
        <Image src="/elements/mailbox.png" alt="mailbox_form" width={580} height={530} />
      </div>
    </div>
  );
};

export default ContactForm;
