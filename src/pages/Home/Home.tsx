import React, { useState } from 'react';
import Banner, { Slide } from 'components/features/Banner/Banner';
import { pictures } from 'components/features/Banner/Pictures'; //배너 사진
import SearchField from 'components/features/SearchField/SearchField';

import { useGetHotGroupQuery, useGetGroupDataQuery } from 'store/hooks';

import { Title, Intro, GroupWrap } from './Home.styled';
import Card from 'components/common/Card/Card';
import { GroupData } from 'group-data';
import Paging from 'components/common/Paging/Paging';

const Home = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string[]>([]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  const handleFilterChange = (filters: string[]) => {
    setFilter(filters);
  };

  const convertQuery = (data: any[]): string => {
    const type = data[0] === '전체' ? null : data[0];
    const position = data[1] === '전체' ? null : data[1];
    const location = data[2] === '전체' ? null : data[2];
    const sort = data[3] === '최신순' ? 'true' : data[3] === '인기순' ? 'false' : null;
    const skills = data.length === 5 ? data[4].join(',') : null;

    const queryParams = [
      type ? `type=${type}` : '',
      position ? `position=${position}` : '',
      location ? `location=${location}` : '',
      sort ? `sortByTime=${sort}` : '',
      skills ? `skills=${skills}` : '',
    ];

    return queryParams.filter((param) => param !== '').join('&');
  };

  const { data: hotGroup } = useGetHotGroupQuery();
  const { data: Group } = useGetGroupDataQuery({ page: page, perPage: 8, filter: convertQuery(filter) });
  const totalPage = Group?.data.totalPage;

  return (
    <>
      <Banner>
        {pictures.map((slide, index) => (
          <Slide
            key={slide.id ? slide.id : index}
            onClick={() => {
              window.open(slide.link);
            }}
          >
            <img src={slide?.thumbnail} alt={slide?.title} />
          </Slide>
        ))}
      </Banner>
      <Title>🔥 지금 HOT한 그룹</Title>
      <Intro>사람들이 주목하고 있는 스터디/프로젝트에 참여해보세요</Intro>
      <GroupWrap>
        {hotGroup?.data.getData.map((group: GroupData, i: number) => (
          <React.Fragment key={i}>
            <Card data={group} />
          </React.Fragment>
        ))}
      </GroupWrap>
      <Title>🔍 그룹 찾기</Title>
      <Intro>마음에 드는 스터디/프로젝트를 찾아보세요</Intro>
      <SearchField handleFilterChange={handleFilterChange} />
      <GroupWrap>
        {Group?.data.groups.map((group: GroupData, i: number) => (
          <React.Fragment key={i}>
            <Card data={group} />
          </React.Fragment>
        ))}
      </GroupWrap>
      <Paging page={page} handlePageChange={handlePageChange} totalPage={totalPage} />
    </>
  );
};

export default Home;
