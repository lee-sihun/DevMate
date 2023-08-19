import React from 'react';
import { InfoSection } from './Info.styled';
import { Position, Skill } from 'group-data';

interface InfoProps {
  type: string,
  maxMembers: number,
  dueDate: string,
  position: Position[],
  skills: Skill[]
}

const Info = ({ type, maxMembers, dueDate, position, skills }: InfoProps) => {
  return (
    <InfoSection>
      {/* Your component code here */}
    </InfoSection>
  );
};

export default Info;