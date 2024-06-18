const LandingFooter = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-24px px-80px py-48px">
      <section className="flex max-w-full items-center gap-80px overflow-x-hidden font-barlow">
        {/* Logo */}
        <div>
          <svg
            width="91"
            height="67"
            viewBox="0 0 91 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_173_1098)">
              <path
                d="M45.3196 40.8686C56.3653 40.8686 65.3196 31.9159 65.3196 20.8686C65.3196 9.82135 56.3653 0.868652 45.3196 0.868652C34.2739 0.868652 25.3196 9.82295 25.3196 20.8686C25.3196 31.9144 34.2739 40.8686 45.3196 40.8686Z"
                fill="url(#paint0_linear_173_1098)"
              />
              <path
                d="M57.5676 17.8837C57.3401 17.6561 57.0979 17.4468 56.8454 17.2559C55.674 16.3727 54.2501 15.8949 52.7494 15.8949C50.9245 15.8949 49.2131 16.601 47.9304 17.8837L43.4949 22.3192L42.9819 22.8321H45.1924L49.036 18.9885C50.0231 18.0015 51.3423 17.4578 52.7494 17.4578C53.8074 17.4578 54.815 17.7651 55.6696 18.3366C55.952 18.5254 56.2176 18.7434 56.4635 18.9885C57.4505 19.9756 57.9942 21.2948 57.9942 22.7019C57.9942 24.109 57.4505 25.4282 56.4635 26.4153L56.3106 26.5682V26.5697C55.3359 27.474 54.0752 27.9694 52.7384 27.9694H47.0963V27.9716H45.9263H39.9842C36.0667 27.9716 32.8801 24.7843 32.8801 20.8675C32.8801 16.9508 35.9474 13.8842 39.7625 13.7664L39.9937 13.7627C40.0017 13.7627 40.0098 13.7627 40.0178 13.7627C40.9032 13.7627 41.7688 13.923 42.5934 14.2398C43.5241 14.5969 44.3546 15.1369 45.0622 15.8437L46.4004 17.1505C46.4004 17.1505 47.5075 16.0456 47.5075 16.05L46.1685 14.7418C45.3051 13.8784 44.2909 13.2191 43.1539 12.7823C42.1361 12.3915 41.0685 12.1962 39.9776 12.202C37.6662 12.2042 35.4923 13.1049 33.8577 14.7403C32.2208 16.3771 31.3194 18.5532 31.3194 20.8675C31.3194 23.1819 32.2208 25.358 33.8577 26.9948C35.4901 28.6272 37.6588 29.5279 39.9666 29.533H45.4522V29.5352H47.5492V29.533H52.7391C54.564 29.533 56.2791 28.8211 57.5676 27.5289L57.7198 27.3767L57.7235 27.3621C58.9081 26.0992 59.5578 24.4529 59.5578 22.7026C59.5578 20.9524 58.8517 19.1663 57.5691 17.8837H57.5676Z"
                fill="white"
              />
              <path
                d="M36.4032 21.1047C36.4032 19.0187 38.1008 17.3211 40.1868 17.3211C41.9341 17.3211 43.4078 18.5116 43.8409 20.1235L45.1214 18.8431C44.2624 16.9758 42.3739 15.6763 40.1868 15.6763C37.1935 15.6763 34.7584 18.1114 34.7584 21.1047C34.7584 23.2911 36.0579 25.1803 37.9252 26.0393L39.2056 24.7588C37.5937 24.3257 36.4032 22.8513 36.4032 21.1047Z"
                fill="white"
              />
            </g>
            <path
              d="M86.3672 53.7646C87.6632 53.7646 88.6952 54.1486 89.4632 54.9166C90.2472 55.6846 90.6392 56.7326 90.6392 58.0606V65.9326C90.6392 66.0126 90.6072 66.0846 90.5432 66.1486C90.4952 66.1966 90.4312 66.2206 90.3512 66.2206H88.1432C88.0632 66.2206 87.9912 66.1966 87.9272 66.1486C87.8792 66.0846 87.8552 66.0126 87.8552 65.9326V58.6367C87.8552 57.9007 87.6472 57.3086 87.2312 56.8606C86.8152 56.3966 86.2632 56.1646 85.5752 56.1646C84.8872 56.1646 84.3272 56.3886 83.8952 56.8366C83.4792 57.2846 83.2712 57.8766 83.2712 58.6126V65.9326C83.2712 66.0126 83.2392 66.0846 83.1752 66.1486C83.1272 66.1966 83.0632 66.2206 82.9832 66.2206H80.7752C80.6952 66.2206 80.6232 66.1966 80.5592 66.1486C80.5112 66.0846 80.4872 66.0126 80.4872 65.9326V54.2446C80.4872 54.1646 80.5112 54.1006 80.5592 54.0526C80.6232 53.9886 80.6952 53.9566 80.7752 53.9566H82.9832C83.0632 53.9566 83.1272 53.9886 83.1752 54.0526C83.2392 54.1006 83.2712 54.1646 83.2712 54.2446V55.0126C83.2712 55.0606 83.2872 55.0926 83.3192 55.1086C83.3512 55.1246 83.3752 55.1086 83.3912 55.0606C84.0472 54.1966 85.0392 53.7646 86.3672 53.7646Z"
              fill="#002462"
            />
            <path
              d="M75.954 52.2767C75.458 52.2767 75.05 52.1167 74.73 51.7967C74.41 51.4767 74.25 51.0687 74.25 50.5727C74.25 50.0767 74.41 49.6687 74.73 49.3487C75.05 49.0287 75.458 48.8687 75.954 48.8687C76.45 48.8687 76.858 49.0287 77.178 49.3487C77.498 49.6687 77.658 50.0767 77.658 50.5727C77.658 51.0687 77.498 51.4767 77.178 51.7967C76.858 52.1167 76.45 52.2767 75.954 52.2767ZM74.802 66.2207C74.722 66.2207 74.65 66.1967 74.586 66.1487C74.538 66.0847 74.514 66.0127 74.514 65.9327V54.2207C74.514 54.1407 74.538 54.0767 74.586 54.0287C74.65 53.9647 74.722 53.9327 74.802 53.9327H77.01C77.09 53.9327 77.154 53.9647 77.202 54.0287C77.266 54.0767 77.298 54.1407 77.298 54.2207V65.9327C77.298 66.0127 77.266 66.0847 77.202 66.1487C77.154 66.1967 77.09 66.2207 77.01 66.2207H74.802Z"
              fill="#002462"
            />
            <path
              d="M66.2421 66.4126C64.9781 66.4126 63.8901 66.0927 62.9781 65.4527C62.0821 64.8126 61.4501 63.9247 61.0821 62.7887C60.8101 61.9247 60.6741 61.0127 60.6741 60.0527C60.6741 59.0287 60.8021 58.1166 61.0581 57.3166C61.4261 56.1966 62.0661 55.3246 62.9781 54.7006C63.8901 54.0766 64.9861 53.7646 66.2661 53.7646C67.4821 53.7646 68.5301 54.0766 69.4101 54.7006C70.3061 55.3246 70.9381 56.1887 71.3061 57.2927C71.5941 58.0607 71.7381 58.9726 71.7381 60.0286C71.7381 61.0366 71.6021 61.9487 71.3301 62.7647C70.9621 63.9007 70.3301 64.7966 69.4341 65.4527C68.5381 66.0927 67.4741 66.4126 66.2421 66.4126ZM66.2421 64.0126C66.8341 64.0126 67.3381 63.8447 67.7541 63.5086C68.1861 63.1726 68.4981 62.7006 68.6901 62.0926C68.8501 61.5646 68.9301 60.8926 68.9301 60.0766C68.9301 59.2126 68.8501 58.5406 68.6901 58.0606C68.5141 57.4526 68.2101 56.9886 67.7781 56.6686C67.3461 56.3326 66.8181 56.1646 66.1941 56.1646C65.6021 56.1646 65.0901 56.3326 64.6581 56.6686C64.2261 56.9886 63.9141 57.4526 63.7221 58.0606C63.5621 58.6206 63.4821 59.2926 63.4821 60.0766C63.4821 60.8606 63.5621 61.5326 63.7221 62.0926C63.8981 62.7006 64.2021 63.1726 64.6341 63.5086C65.0821 63.8447 65.6181 64.0126 66.2421 64.0126Z"
              fill="#002462"
            />
            <path
              d="M52.3359 66.4128C51.1359 66.4128 50.0799 66.1808 49.1679 65.7168C48.2559 65.2368 47.552 64.5728 47.056 63.7248C46.56 62.8768 46.312 61.8928 46.312 60.7728V54.8448C46.312 53.7248 46.56 52.7408 47.056 51.8928C47.552 51.0448 48.2559 50.3888 49.1679 49.9248C50.0799 49.4608 51.1359 49.2288 52.3359 49.2288C53.5199 49.2288 54.5679 49.4528 55.4799 49.9008C56.392 50.3488 57.0959 50.9808 57.5919 51.7968C58.0879 52.6128 58.3359 53.5568 58.3359 54.6288C58.3359 54.7088 58.3039 54.7808 58.2399 54.8448C58.1919 54.8928 58.128 54.9168 58.048 54.9168L55.84 55.0368C55.648 55.0368 55.5519 54.9488 55.5519 54.7728C55.5519 53.8288 55.2559 53.0688 54.6639 52.4928C54.0879 51.9168 53.3119 51.6288 52.3359 51.6288C51.3599 51.6288 50.5759 51.9168 49.9839 52.4928C49.3919 53.0688 49.0959 53.8288 49.0959 54.7728V60.8928C49.0959 61.8208 49.3919 62.5728 49.9839 63.1488C50.5759 63.7248 51.3599 64.0128 52.3359 64.0128C53.3119 64.0128 54.0879 63.7328 54.6639 63.1728C55.2559 62.5968 55.5519 61.8368 55.5519 60.8928C55.5519 60.7168 55.648 60.6288 55.84 60.6288L58.048 60.7248C58.128 60.7248 58.1919 60.7488 58.2399 60.7968C58.3039 60.8448 58.3359 60.9008 58.3359 60.9648C58.3359 62.0528 58.0879 63.0128 57.5919 63.8448C57.0959 64.6608 56.392 65.2928 55.4799 65.7408C54.5679 66.1888 53.5199 66.4128 52.3359 66.4128Z"
              fill="#002462"
            />
            <path
              d="M39.2812 53.7646C40.5772 53.7646 41.6092 54.1486 42.3772 54.9166C43.1612 55.6846 43.5532 56.7326 43.5532 58.0606V65.9326C43.5532 66.0126 43.5212 66.0846 43.4572 66.1486C43.4092 66.1966 43.3452 66.2206 43.2652 66.2206H41.0572C40.9772 66.2206 40.9052 66.1966 40.8412 66.1486C40.7932 66.0846 40.7692 66.0126 40.7692 65.9326V58.6367C40.7692 57.9007 40.5612 57.3086 40.1452 56.8606C39.7292 56.3966 39.1772 56.1646 38.4892 56.1646C37.8012 56.1646 37.2412 56.3886 36.8092 56.8366C36.3932 57.2846 36.1852 57.8766 36.1852 58.6126V65.9326C36.1852 66.0126 36.1532 66.0846 36.0892 66.1486C36.0412 66.1966 35.9772 66.2206 35.8972 66.2206H33.6892C33.6092 66.2206 33.5372 66.1966 33.4732 66.1486C33.4252 66.0846 33.4012 66.0126 33.4012 65.9326V54.2446C33.4012 54.1646 33.4252 54.1006 33.4732 54.0526C33.5372 53.9886 33.6092 53.9566 33.6892 53.9566H35.8972C35.9772 53.9566 36.0412 53.9886 36.0892 54.0526C36.1532 54.1006 36.1852 54.1646 36.1852 54.2446V55.0126C36.1852 55.0606 36.2012 55.0926 36.2332 55.1086C36.2652 55.1246 36.2892 55.1086 36.3052 55.0606C36.9612 54.1966 37.9532 53.7646 39.2812 53.7646Z"
              fill="#002462"
            />
            <path
              d="M27.6649 54.2445C27.6649 54.1645 27.6889 54.1005 27.7369 54.0525C27.8009 53.9885 27.8729 53.9565 27.9529 53.9565H30.1369C30.2169 53.9565 30.2809 53.9885 30.3289 54.0525C30.3929 54.1005 30.4249 54.1645 30.4249 54.2445V65.9325C30.4249 66.0125 30.3929 66.0845 30.3289 66.1485C30.2809 66.1965 30.2169 66.2205 30.1369 66.2205H27.9529C27.8729 66.2205 27.8009 66.1965 27.7369 66.1485C27.6889 66.0845 27.6649 66.0125 27.6649 65.9325V65.1645C27.6649 65.1165 27.6489 65.0845 27.6169 65.0685C27.5849 65.0525 27.5529 65.0685 27.5209 65.1165C26.8649 65.9645 25.8809 66.3885 24.5689 66.3885C23.3529 66.3885 22.3289 66.0365 21.4969 65.3325C20.6809 64.6285 20.2729 63.6285 20.2729 62.3325V54.2445C20.2729 54.1645 20.2969 54.1005 20.3449 54.0525C20.4089 53.9885 20.4809 53.9565 20.5609 53.9565H22.7689C22.8489 53.9565 22.9129 53.9885 22.9609 54.0525C23.0249 54.1005 23.0569 54.1645 23.0569 54.2445V61.5405C23.0569 62.2925 23.2489 62.8925 23.6329 63.3405C24.0329 63.7885 24.5849 64.0125 25.2889 64.0125C26.0089 64.0125 26.5849 63.7885 27.0169 63.3405C27.4489 62.8925 27.6649 62.2925 27.6649 61.5405V54.2445Z"
              fill="#002462"
            />
            <path
              d="M11.9252 66.4128C10.6772 66.4128 9.5892 66.2128 8.6612 65.8128C7.7332 65.4128 7.0132 64.8528 6.5012 64.1328C6.0052 63.4128 5.7572 62.5648 5.7572 61.5888V60.9888C5.7572 60.9088 5.7812 60.8448 5.8292 60.7968C5.8932 60.7328 5.9652 60.7008 6.0452 60.7008H8.1812C8.2612 60.7008 8.3252 60.7328 8.3732 60.7968C8.4372 60.8448 8.4692 60.9088 8.4692 60.9888V61.4448C8.4692 62.1808 8.7972 62.7968 9.4532 63.2928C10.1092 63.7728 11.0052 64.0128 12.1412 64.0128C13.1172 64.0128 13.8532 63.8048 14.3492 63.3888C14.8452 62.9728 15.0932 62.4368 15.0932 61.7808C15.0932 61.3328 14.9572 60.9568 14.6852 60.6528C14.4132 60.3328 14.0212 60.0448 13.5092 59.7888C13.0132 59.5328 12.2612 59.2128 11.2532 58.8288C10.1172 58.4128 9.1972 58.0208 8.4932 57.6528C7.7892 57.2848 7.1972 56.7888 6.7172 56.1648C6.2532 55.5248 6.0212 54.7328 6.0212 53.7888C6.0212 52.3808 6.5332 51.2688 7.5572 50.4528C8.5812 49.6368 9.9492 49.2288 11.6612 49.2288C12.8612 49.2288 13.9172 49.4368 14.8292 49.8528C15.7572 50.2688 16.4772 50.8528 16.9892 51.6048C17.5012 52.3408 17.7572 53.1968 17.7572 54.1728V54.5808C17.7572 54.6608 17.7252 54.7328 17.6612 54.7968C17.6132 54.8448 17.5492 54.8688 17.4692 54.8688H15.3092C15.2292 54.8688 15.1572 54.8448 15.0932 54.7968C15.0452 54.7328 15.0212 54.6608 15.0212 54.5808V54.3168C15.0212 53.5648 14.7092 52.9328 14.0852 52.4208C13.4772 51.8928 12.6292 51.6288 11.5412 51.6288C10.6612 51.6288 9.9732 51.8128 9.4772 52.1808C8.9972 52.5488 8.7572 53.0688 8.7572 53.7408C8.7572 54.2208 8.8852 54.6128 9.1412 54.9168C9.3972 55.2208 9.7812 55.5008 10.2932 55.7568C10.8052 55.9968 11.5972 56.3088 12.6692 56.6928C13.8052 57.1248 14.7092 57.5168 15.3812 57.8688C16.0692 58.2208 16.6532 58.7168 17.1332 59.3568C17.6292 59.9808 17.8772 60.7648 17.8772 61.7088C17.8772 63.1488 17.3412 64.2928 16.2692 65.1408C15.2132 65.9888 13.7652 66.4128 11.9252 66.4128Z"
              fill="#002462"
            />
            <path
              d="M1.704 52.2767C1.208 52.2767 0.8 52.1167 0.48 51.7967C0.16 51.4767 0 51.0687 0 50.5727C0 50.0767 0.16 49.6687 0.48 49.3487C0.8 49.0287 1.208 48.8687 1.704 48.8687C2.2 48.8687 2.608 49.0287 2.928 49.3487C3.248 49.6687 3.408 50.0767 3.408 50.5727C3.408 51.0687 3.248 51.4767 2.928 51.7967C2.608 52.1167 2.2 52.2767 1.704 52.2767ZM0.552 66.2207C0.472 66.2207 0.4 66.1967 0.336 66.1487C0.288 66.0847 0.264 66.0127 0.264 65.9327V54.2207C0.264 54.1407 0.288 54.0767 0.336 54.0287C0.4 53.9647 0.472 53.9327 0.552 53.9327H2.76C2.84 53.9327 2.904 53.9647 2.952 54.0287C3.016 54.0767 3.048 54.1407 3.048 54.2207V65.9327C3.048 66.0127 3.016 66.0847 2.952 66.1487C2.904 66.1967 2.84 66.2207 2.76 66.2207H0.552Z"
              fill="#002462"
            />
            <defs>
              <linearGradient
                id="paint0_linear_173_1098"
                x1="34.4966"
                y1="4.85054"
                x2="55.5368"
                y2="37.3672"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFA502" />
                <stop offset="1" stopColor="#FF705B" />
              </linearGradient>
              <clipPath id="clip0_173_1098">
                <rect width="40" height="40" fill="white" transform="translate(25.3196 0.868652)" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="flex grow justify-between">
          {/* Address & Telephone */}
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-8px">
              <div className="flex items-center justify-center">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_173_1116)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.6416 3.14176C7.41997 3.14176 4.8083 5.75344 4.8083 8.9751C4.8083 10.5518 5.51927 12.0401 6.71853 13.5973C7.73114 14.9122 9.02725 16.1978 10.4185 17.5778C10.4926 17.6513 10.567 17.7251 10.6416 17.7992C10.7163 17.7251 10.7906 17.6513 10.8647 17.5778C12.256 16.1978 13.5521 14.9122 14.5647 13.5973C15.764 12.0401 16.475 10.5518 16.475 8.9751C16.475 5.75344 13.8633 3.14176 10.6416 3.14176ZM3.14163 8.9751C3.14163 4.83296 6.4995 1.4751 10.6416 1.4751C14.7838 1.4751 18.1416 4.83296 18.1416 8.9751C18.1416 11.0802 17.1859 12.9253 15.8852 14.6143C14.7983 16.0256 13.4071 17.4048 12.0173 18.7825C11.7544 19.0431 11.4916 19.3036 11.2309 19.5644C10.9055 19.8898 10.3778 19.8898 10.0524 19.5644C9.79166 19.3036 9.52883 19.0431 9.26594 18.7825C7.87619 17.4048 6.48501 16.0256 5.39807 14.6143C4.09732 12.9253 3.14163 11.0802 3.14163 8.9751ZM10.6416 7.30843C9.72116 7.30843 8.97497 8.05462 8.97497 8.9751C8.97497 9.89557 9.72116 10.6418 10.6416 10.6418C11.5621 10.6418 12.3083 9.89557 12.3083 8.9751C12.3083 8.05462 11.5621 7.30843 10.6416 7.30843ZM7.3083 8.9751C7.3083 7.13415 8.80068 5.64176 10.6416 5.64176C12.4826 5.64176 13.975 7.13415 13.975 8.9751C13.975 10.816 12.4826 12.3084 10.6416 12.3084C8.80068 12.3084 7.3083 10.816 7.3083 8.9751Z"
                      fill="#27354E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_173_1116">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.639191 0.640625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-text-neutral-primary">
                13F.-6, No. 2, Ln. 150, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei City 110416 , Taiwan
              </p>
            </div>
            <div className="flex items-center gap-8px">
              <div className="flex items-center justify-center">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5215 2.21649C11.5723 1.75907 11.9843 1.42945 12.4417 1.48027C14.3207 1.689 16.0728 2.53043 17.4104 3.86638C18.7481 5.20234 19.5917 6.95342 19.8028 8.83212C19.8542 9.28948 19.5251 9.7019 19.0677 9.75329C18.6104 9.80468 18.198 9.47558 18.1466 9.01822C17.9777 7.51527 17.3028 6.1144 16.2327 5.04564C15.1626 3.97687 13.7608 3.30373 12.2577 3.13674C11.8003 3.08593 11.4706 2.67392 11.5215 2.21649ZM5.56249 4.52702C5.32601 4.40741 5.04673 4.4074 4.81024 4.52702C4.72131 4.572 4.61044 4.66805 4.12126 5.15724L3.9899 5.2886C3.52305 5.75545 3.39721 5.89047 3.29662 6.06954C3.18003 6.27709 3.08234 6.65271 3.08305 6.89077C3.08368 7.10261 3.11496 7.23018 3.25267 7.71539C3.93234 10.11 5.21451 12.3699 7.10145 14.2568C8.98838 16.1437 11.2482 17.4259 13.6428 18.1056C14.1281 18.2433 14.2556 18.2746 14.4675 18.2752C14.7055 18.2759 15.0811 18.1782 15.2887 18.0616C15.4678 17.961 15.6028 17.8352 16.0696 17.3683L16.201 17.237C16.6902 16.7478 16.7862 16.6369 16.8312 16.548C16.9508 16.3115 16.9508 16.0322 16.8312 15.7957C16.7862 15.7068 16.6902 15.5959 16.201 15.1068L16.0386 14.9444C15.7172 14.6229 15.6449 14.5571 15.5901 14.5215C15.3139 14.3419 14.9579 14.3419 14.6816 14.5215C14.6269 14.5571 14.5546 14.6229 14.2332 14.9444C14.2268 14.9507 14.2203 14.9572 14.2137 14.9639C14.1389 15.039 14.0442 15.134 13.9305 15.2154L13.4453 14.5379L13.9305 15.2154C13.5247 15.506 12.973 15.6001 12.4938 15.4604C12.3601 15.4214 12.2501 15.3684 12.1645 15.3272C12.1578 15.3239 12.1512 15.3207 12.1447 15.3176C10.8531 14.6975 9.64332 13.8524 8.57459 12.7836C7.50586 11.7149 6.66078 10.5052 6.04064 9.21355C6.03754 9.20708 6.03435 9.20046 6.03108 9.19369C5.98983 9.10812 5.9368 8.99811 5.89784 8.86447L6.69787 8.63126L5.89784 8.86447C5.75815 8.38527 5.85223 7.83356 6.14282 7.42773L6.14282 7.42773C6.22424 7.31403 6.31926 7.21936 6.39431 7.14458C6.401 7.13791 6.40752 7.13141 6.41387 7.12507C6.73529 6.80364 6.80111 6.73137 6.83672 6.67659L6.83672 6.67659C7.0163 6.40039 7.0163 6.04431 6.83672 5.76811L7.53537 5.31386L6.83672 5.76811C6.80111 5.71333 6.73529 5.64106 6.41387 5.31963L6.25148 5.15724C5.76229 4.66805 5.65142 4.572 5.56249 4.52702ZM4.058 3.03977C4.76745 2.68093 5.60528 2.68093 6.31473 3.03977C6.67523 3.22211 6.98819 3.53587 7.35022 3.89883C7.37654 3.92521 7.40312 3.95186 7.42999 3.97873L7.59238 4.14112C7.61008 4.15882 7.62763 4.17634 7.64499 4.19367C7.88388 4.43215 8.08965 4.63758 8.23402 4.85962L7.56995 5.29138L8.23402 4.85962C8.77276 5.68823 8.77276 6.75646 8.23402 7.58507C8.08965 7.80712 7.88388 8.01254 7.645 8.25102C7.62763 8.26836 7.61009 8.28587 7.59238 8.30358C7.54437 8.35158 7.51988 8.3762 7.50282 8.39425C7.50251 8.39561 7.50221 8.39711 7.50193 8.39873C7.50162 8.40054 7.5014 8.40221 7.50124 8.40372C7.50398 8.40981 7.5077 8.41787 7.51282 8.42876C7.52083 8.44578 7.53025 8.46539 7.54311 8.49218C8.08296 9.61658 8.8192 10.6712 9.7531 11.6051C10.687 12.539 11.7417 13.2753 12.8661 13.8151L12.5054 14.5664L12.8661 13.8151C12.8928 13.828 12.9125 13.8374 12.9295 13.8454C12.9404 13.8505 12.9484 13.8543 12.9545 13.857C12.956 13.8568 12.9577 13.8566 12.9595 13.8563C12.9611 13.856 12.9626 13.8557 12.964 13.8554C12.982 13.8384 13.0067 13.8139 13.0547 13.7659C13.0724 13.7481 13.0899 13.7306 13.1072 13.7132C13.3457 13.4744 13.5511 13.2686 13.7732 13.1242C14.6018 12.5855 15.67 12.5855 16.4986 13.1242C16.7207 13.2686 16.9261 13.4744 17.1646 13.7132C17.1819 13.7306 17.1994 13.7481 17.2171 13.7659L17.3795 13.9283C17.4064 13.9551 17.433 13.9817 17.4594 14.008C17.8224 14.37 18.1361 14.683 18.3185 15.0435C18.6773 15.753 18.6773 16.5908 18.3185 17.3002C18.1361 17.6607 17.8224 17.9737 17.4594 18.3357C17.433 18.3621 17.4064 18.3886 17.3795 18.4155L17.2481 18.5469C17.2291 18.5659 17.2103 18.5847 17.1917 18.6033C16.804 18.9914 16.5067 19.289 16.105 19.5147C15.6467 19.7722 14.9881 19.9434 14.4625 19.9418C14.0026 19.9405 13.6672 19.8452 13.2347 19.7222C13.2192 19.7178 13.2035 19.7134 13.1878 19.7089C10.5267 18.9536 8.01597 17.5283 5.92294 15.4353C3.82991 13.3423 2.40462 10.8315 1.64934 8.17047C1.64486 8.15469 1.64041 8.13905 1.636 8.12354C1.51308 7.69103 1.41776 7.35564 1.41639 6.89573C1.41483 6.37009 1.58608 5.71155 1.84352 5.25327L1.84353 5.25326C2.06919 4.85154 2.36682 4.55422 2.75493 4.16651C2.77354 4.14792 2.79236 4.12912 2.81138 4.11009L2.94275 3.97873C2.96962 3.95186 2.99619 3.92521 3.02251 3.89883C3.38454 3.53587 3.6975 3.22211 4.058 3.03977L4.43412 3.78339L4.058 3.03977ZM11.5318 5.48226C11.6199 5.03054 12.0576 4.73579 12.5093 4.82393C13.486 5.01449 14.3837 5.49218 15.0873 6.19586C15.791 6.89954 16.2687 7.79719 16.4593 8.77393C16.5474 9.22565 16.2527 9.66328 15.8009 9.75142C15.3492 9.83955 14.9116 9.5448 14.8234 9.09308C14.6964 8.44193 14.3779 7.84349 13.9088 7.37437C13.4397 6.90525 12.8413 6.58679 12.1901 6.45975C11.7384 6.37162 11.4436 5.93398 11.5318 5.48226Z"
                    fill="#27354E"
                  />
                </svg>
              </div>
              <p className="text-text-neutral-primary">+886-2-2700-1979</p>
            </div>
          </div>
          {/* GitHub Icon */}
          <div className="">
            <svg
              width="88"
              height="67"
              viewBox="0 0 88 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_173_1129" fill="white">
                <path d="M0 0.868652H88V66.4127H0V0.868652Z" />
              </mask>
              <path
                d="M0.5 66.4127V0.868652H-0.5V66.4127H0.5Z"
                fill="#27354E"
                mask="url(#path-1-inside-1_173_1129)"
              />
              <path
                d="M44 16.9739C41.8113 16.9739 39.644 17.405 37.6219 18.2426C35.5998 19.0801 33.7625 20.3078 32.2149 21.8554C29.0893 24.981 27.3333 29.2203 27.3333 33.6405C27.3333 41.0072 32.1166 47.2572 38.7333 49.4739C39.5666 49.6072 39.8333 49.0905 39.8333 48.6405V45.8239C35.2166 46.8239 34.2333 43.5905 34.2333 43.5905C33.4666 41.6572 32.3833 41.1405 32.3833 41.1405C30.8666 40.1072 32.5 40.1405 32.5 40.1405C34.1666 40.2572 35.05 41.8572 35.05 41.8572C36.5 44.3905 38.95 43.6405 39.9 43.2405C40.05 42.1572 40.4833 41.4239 40.95 41.0072C37.25 40.5905 33.3666 39.1572 33.3666 32.8072C33.3666 30.9572 34 29.4739 35.0833 28.2905C34.9166 27.8739 34.3333 26.1405 35.25 23.8905C35.25 23.8905 36.65 23.4405 39.8333 25.5905C41.15 25.2239 42.5833 25.0405 44 25.0405C45.4166 25.0405 46.85 25.2239 48.1666 25.5905C51.35 23.4405 52.75 23.8905 52.75 23.8905C53.6666 26.1405 53.0833 27.8739 52.9166 28.2905C54 29.4739 54.6333 30.9572 54.6333 32.8072C54.6333 39.1739 50.7333 40.5739 47.0166 40.9905C47.6166 41.5072 48.1666 42.5239 48.1666 44.0739V48.6405C48.1666 49.0905 48.4333 49.6239 49.2833 49.4739C55.9 47.2405 60.6666 41.0072 60.6666 33.6405C60.6666 31.4518 60.2356 29.2846 59.398 27.2625C58.5604 25.2404 57.3327 23.4031 55.7851 21.8554C54.2375 20.3078 52.4001 19.0801 50.378 18.2426C48.3559 17.405 46.1887 16.9739 44 16.9739Z"
                fill="#27354E"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="text-right text-text-neutral-secondary">
        <p>iSunFA @ {thisYear}. All rights reserved.</p>
      </section>
    </footer>
  );
};

export default LandingFooter;
