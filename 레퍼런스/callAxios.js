//aixos로 영/한 전환
// serverside
/**
 * author: 이형진
 * date: 2023.09.19
 * pname: news
 * desc: news
 */

import React, { useState, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import useSWR from 'swr'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'

import Img from '@/components/Img'
import Layout from '@/components/Layout/Layout'
import Pagination from '@/components/Pagination'
import KeyVisual from '@/components/Layout/KeyVisual'
import Breadcrumb from '@/components/Layout/Breadcrumb'
import { $addListIndex, $dateToString, $queryToString } from '@/libs/common'
import { axiosInstance } from '@/libs/axiosInstance'

const S = {
  RecentNews: styled.div`
    .news-box {
      display: block;

      .thumbnail-box {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 56.26%;
        overflow: hidden;

        .thumbnail {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
        }
      }

      .info {
        padding: 27px 0 0 40px;
        font-size: 16px;

        line-height: 24px;

        .tit {
          margin-top: 20px;

          span {
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
          }
        }

        .desc {
          margin-top: 20px;
        }

        .btn-more {
          margin-top: 40px;
        }
      }

      &:hover {
        .info {
          .tit {
            span {
              background-size: 100%;
            }
          }
        }
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      bottom: 0;
      width: 48px;
      height: 48px;
      z-index: 10;
      background-size: 48px;
      background-repeat: no-repeat;
      background-position: center;

      &.swiper-button-disabled,
      &.swiper-button-lock {
        opacity: 0.3;
      }
    }

    .swiper-button-prev {
      right: 68px;
      background-image: url('/images/icon/ic_basic_48_prev_black.svg');
    }

    .swiper-button-next {
      right: 0;
      background-image: url('/images/icon/ic_basic_48_next_black.svg');
    }

    //pc 사이즈에서만 적용
    @media (min-width: 769px) {
      .news-box {
        display: grid;
        grid-template-columns: 66% 34%;
      }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      .news-box {
        display: flex;
        flex-direction: column;

        .info {
          padding: 40px 0 0;
        }
      }
    }

    //모바일 사이즈에서만 적용
    @media (max-width: 768px) {
      .news-box {
        display: flex;
        flex-direction: column;

        .info {
          padding: 20px 0 0;

          .tit {
            margin-top: 10px;
          }

          .desc {
            margin-top: 10px;
          }

          .btn-more {
            margin-top: 30px;
          }
        }
      }

      .swiper {
        display: none;
      }

      .swiper-button-prev,
      .swiper-button-next {
        width: 32px;
        height: 32px;
        background-size: 32px;
      }

      .swiper-button-prev {
        right: 52px;
      }
    }
  `,
  col3: styled.ul`
    display: grid;

    .news-list {
      .thumbnail-box {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 56.26%;
        overflow: hidden;

        .thumbnail {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          transition: all 0.6s;
        }
      }

      .date {
        margin-top: 20px;
      }

      .tit {
        margin-top: 5px;

        span {
          font-size: 20px;
          font-weight: 600;
          line-height: 30px;
        }
      }

      &:hover {
        .thumbnail-box {
          img {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        .tit {
          span {
            background-size: 100%;
          }
        }
      }
    }

    //pc 사이즈에서만 적용
    @media (min-width: 769px) {
      margin-top: 80px;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 60px 20px;
      .news-list {
        img {
          max-height: 218px;
        }
      }
    }

    //모바일 사이즈에서만 적용
    @media (max-width: 768px) {
      margin-top: 20px;
      grid-template-columns: 1fr;
      gap: 40px 0;
      .news-list {
        .date {
          font-size: 14px;
          line-height: 22px;
        }

        .tit {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  `
}

function NewsList({ swrServerData }) {
  const { t: i18n } = useTranslation('common')
  const { t } = useTranslation('newsroom')

  const { list: newsData, ...pagination } = swrServerData
  const recentNewsData = newsData?.filter((e) => e?.fixingYn)
  const listData = $addListIndex(
    newsData?.filter((e) => !e?.fixingYn),
    pagination
  )

  console.log(swrServerData)

  return (
    <>
      <KeyVisual clear>
        <Breadcrumb
          list={[
            { label: i18n('breadcrumb-home') },
            {
              label: i18n('gnb-menu.newsroom.label')
            },
            {
              label: i18n('gnb-menu.newsroom.children.news.label')
            }
          ]}
        />
        <div className="kv-contents">
          <h2 className="kv-title">{t('news.kvTitle')}</h2>
        </div>
      </KeyVisual>
      <div className="contents">
        <S.RecentNews>
          <Swiper navigation={true} modules={[Navigation]} className="swiper">
            {recentNewsData?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="news-box">
                  <Img
                    src={
                      item?.thumbnailList
                        ? item?.thumbnailList[0]?.filePath
                        : ''
                    }
                    className="thumbnail"
                    width={793}
                    height={448}
                    alt={''}
                  />
                  <div className="info">
                    <div className="date">
                      {$dateToString(item?.presentationDate)}
                    </div>
                    <div className="tit ellipsis line-2">
                      <span className="int-underline">{item?.title}</span>
                    </div>
                    <div className="desc ellipsis line-3">{item?.contents}</div>
                    <Link
                      href={`/newsroom/news/${item?.newsSeq}`}
                      className="btn-more"
                    >
                      {t('news.btn-detail')}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.RecentNews>
        <S.col3>
          {listData?.map((item, index) => (
            <li className="news-list" key={index}>
              <Link href={`/newsroom/news/${item?.newsSeq}`}>
                <div className="thumbnail-box">
                  <Img
                    className="thumbnail"
                    src={
                      item?.thumbnailList
                        ? item?.thumbnailList[0]?.filePath
                        : ''
                    }
                    width={387}
                    height={218}
                    alt={''}
                  />
                </div>

                <div className="date">
                  {$dateToString(item?.presentationDate)}
                </div>
                <div className="tit ellipsis line-2">
                  <span className="int-underline">{item?.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </S.col3>
        <Pagination {...pagination} />
      </div>
    </>
  )
}

export const getServerSideProps = async ({ locale, query }) => {
  const { data: swrServerData } = await axiosInstance.get(
    `/api/${locale}/news?currentPage=${
      query.currentPage ? query.currentPage : '1'
    }`
  )
  return {
    props: {
      swrServerData,
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'newsroom']))
    }
  }
}
NewsList.getLayout = function getLayout(page) {
  return <Layout HeaderType="white">{page}</Layout>
}
export default NewsList