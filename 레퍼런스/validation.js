// validation check 형진님이 주신거
//yap.js


/**
 * author: 이형진
 * date: 2023.10.10
 * pname: Contact
 * desc: Contact
 */

import React, { useEffect, useRef, useState } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import Layout from '@/components/Layout/Layout'
import KeyVisual from '@/components/Layout/KeyVisual'
import Breadcrumb from '@/components/Layout/Breadcrumb'
import styled from 'styled-components'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import * as yup from 'yup'
import { useAxios } from '@/libs/useAxios'
import { yupResolver } from '@hookform/resolvers/yup'
import Loading from '@/components/Loading'

const S = {
  Contact: styled.div`
    .contact-tit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;

      line-height: 24px;

      .tit-left {
        .admin-mail {
          display: inline-block;
          position: relative;
          padding-left: 21px;

          &:before {
            content: '';
            display: inline-block;
            position: absolute;
            top: 50%;
            left: 10px;
            width: 1px;
            height: 14px;
            transform: translateY(-50%);
            background-color: #000;
          }
        }
      }

      .required {
        position: relative;
        padding-left: 14px;
        color: #f4020c;

        &:before {
          content: '';
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 0;
          width: 4px;
          height: 4px;
          background-color: #f4020c;
          border-radius: 50%;
          transform: translateY(-50%);
        }
      }
    }

    .contact-form {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px 40px;

      .form-box {
        padding: 18px 0 0;
        border-top: 2px solid #000;

        &.col-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 54px 20px;

          & > div:nth-child(5),
          & > div:nth-child(6) {
            grid-column: 1 / span 2;
          }
        }

        .contact-textarea {
          .text-area-group {
            height: 504px;
          }

          .label-text-error {
            position: absolute;
            bottom: -23px;
          }
        }
      }

      .btn-submit {
        margin: 0 auto;
        grid-column: 1 / span 2;
        padding: 12px 0;
        width: 255px;
        color: #fff;
        border: 1px solid #000;
        background-color: #000;

        &:disabled {
          background-color: #ccc;
          border: 1px solid #999;
        }
      }
    }

    //모바일 사이즈에서만 적용
    @media (max-width: 768px) {
      .contact-tit {
        font-size: 14px;
        line-height: 22px;
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        gap: unset;

        .form-box {
          padding: 41px 0 0;
          border-top: 2px solid #000;

          & + .form-box {
            margin-top: 2px;
            border-top: unset;
          }

          &.col-2 {
            display: flex;
            flex-direction: column;
            gap: 43px 0;
          }

          .contact-textarea {
            .text-area-group {
              height: 200px;
            }
          }
        }

        .btn-submit {
          margin: 60px auto 0;
          padding: 13px 0;
          width: 100%;
          color: #fff;
          border: 1px solid #999;
          background-color: #ccc;

          &.active {
            border: 1px solid #000;
            background-color: #000;
          }
        }
      }
    }
  `
}

function Contact({ locale }) {
  const { t: i18n } = useTranslation('common')
  const { t } = useTranslation('ir')

  const { fetchData, isLoading } = useAxios()

  const schema = yup.object().shape({
    name: yup.string().min(2, '2~20자로 입력해주세요.').required(' '),
    mobilePhoneNo: yup.string().required(' '),
    email: yup
      .string()
      .required(' ')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        excludeEmptyString: true,
        message: '올바른 형식의 이메일을 입력해 주세요.'
      }),
    bodyText: yup.string().required(' ')
  })

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    reset({
      name: '',
      companyName: '',
      departmentName: '',
      responsibilitiesOfOffice: '',
      mobilePhoneNo: '',
      email: '',
      bodyText: ''
    })
  }, [])

  const onSubmit = async (body) => {
    try {
      const { code, data, message } = await fetchData(
        `/api/${locale}/ir-inquiry`,
        'POST',
        {
          data: {
            ...body
          }
        }
      )
      if (code === 'SUC001') {
        await alert('문의가 전송되었습니다.')
      } else {
        throw { code, data, message }
      }
    } catch (e) {
      console.log('error', e)
    }
  }

  return (
    <>
      <KeyVisual clear>
        <Breadcrumb
          list={[
            { label: i18n('breadcrumb-home') },
            {
              label: i18n('gnb-menu.invest.label')
            },
            {
              label: i18n('gnb-menu.invest.children.contact.label')
            }
          ]}
        />
        <h2 className="kv-title">{t('contact.kvTitle')}</h2>
      </KeyVisual>
      <div className="contents">
        <S.Contact>
          <div className="contact-tit">
            <div className="tit-left">
              {t('contact.tit-1')}{' '}
              <span className="admin-mail">ir@ocihc.co.kr</span>
            </div>
            <div className="required">{t('contact.tit-2')}</div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-box col-2">
              <Input
                name="name"
                label={t('contact.input-label-1')}
                mask={'char'}
                required={true}
                control={control}
                maxLength={20}
                placeholder={t('contact.input-placeholder-1')}
              />
              <Input
                name="companyName"
                label={t('contact.input-label-2')}
                control={control}
                placeholder={t('contact.input-placeholder-2')}
              />
              <Input
                name="departmentName"
                label={t('contact.input-label-3')}
                control={control}
                placeholder={t('contact.input-placeholder-3')}
              />
              <Input
                name="responsibilitiesOfOffice"
                label={t('contact.input-label-4')}
                control={control}
                placeholder={t('contact.input-placeholder-4')}
              />
              <Input
                name="mobilePhoneNo"
                label={t('contact.input-label-5')}
                mask={'tel'}
                required={true}
                control={control}
                placeholder={t('contact.input-placeholder-5')}
              />
              <Input
                name="email"
                label={t('contact.input-label-6')}
                mask={'mail'}
                required={true}
                control={control}
                placeholder={t('contact.input-placeholder-6')}
              />
            </div>
            <div className="form-box">
              <Textarea
                name="bodyText"
                label={t('contact.input-label-7')}
                required={true}
                control={control}
                className="contact-textarea"
                placeholder={t('contact.input-placeholder-7')}
              />
            </div>
            <button
              type="submit"
              className="btn-submit"
              disabled={!isDirty || !isValid}
            >
              {t('contact.submit-button')}
            </button>
          </form>
        </S.Contact>
        {isLoading ? <Loading /> : ''}
      </div>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    locale,
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'ir']))
  }
})
Contact.getLayout = function getLayout(page) {
  return <Layout backBtnEvent={() => {}}>{page}</Layout>
}
export default Contact