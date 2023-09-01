import UpdateHeader from 'components/layout/Update/UpdateHeader';
import UpdateMain from 'components/layout/Update/UpdateMain';
import { GroupData, GroupType, Location, Position, Skill } from 'group-data';
import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { groupDataInit } from 'store/slices/groupUpdateSlice';

interface GroupUpdateState {
  title: string;
  type: GroupType;
  maxMembers?: number;
  skills?: Skill[];
  dueDate?: string;
  position: Position[];
  location: Location;
  imageFile?: File | string;
  description: string;
}

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const beforeUrl: string = location.state?.beforeUrl;
  const detailData: GroupData = location.state?.detailData;

  useEffect(() => {
    beforeUrl !== ('detail' || 'mygroup') && navigate('/');
  }, []);

  useEffect(() => {
    // // console.log(detailData);
    if (detailData) {
      const initGroupData: GroupUpdateState = {
        title: detailData.title,
        type: detailData.type,
        maxMembers: detailData.maxMembers,
        skills: detailData.skills,
        dueDate: detailData.dueDate,
        position: detailData.position,
        location: detailData.location,
        // imageFile: detailData.imageUrl,
        description: detailData.description,
      };
      dispatch(groupDataInit(initGroupData));
    }
  }, [detailData]);

  const updateHeader = useMemo(() => <UpdateHeader />, []);
  const updateMain = useMemo(() => <UpdateMain />, []);

  return (
    <>
      {updateHeader}
      {updateMain}
    </>
  );
};

export default Update;
