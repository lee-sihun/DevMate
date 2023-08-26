import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { GroupType, Location, Position, Skill } from 'group-data';
import { mdText } from 'utils/const';
import { MultiValue } from 'react-select';

// Define a type for the slice state
interface GroupCreateState {
  title: string;
  type: GroupType;
  maxMembers?: number;
  skills?: Skill[];
  dueDate?: string;
  position: Position[];
  location: Location;
  imageFile?: File;
  description: string;
}

// Define the initial state using that type
const initialState: GroupCreateState = {
  title: '',
  type: 'study',
  maxMembers: 1,
  skills: ['Adobe', 'Android', 'Angular', 'Apache', 'Aws', 'Babel', 'BootStrap', 'C#', 'Cpp'],
  dueDate: '1개월',
  position: ['PM', 'QA', '기획자'],
  location: '전국',
  imageFile: undefined,
  description: mdText,
};

export const groupCreateSlice = createSlice({
  name: 'groupCreater',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    titleChange: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    typeChange: (state, action: PayloadAction<GroupType>) => {
      state.type = action.payload;
    },
    maxMembersChange: (state, action: PayloadAction<number>) => {
      state.maxMembers = action.payload;
    },
    skillsChange: (state, action: PayloadAction<MultiValue<{ value: Skill; label: Skill }>>) => {
      const { payload } = action;
      const newSkills: Skill[] = [];
      for (const skill of payload) {
        newSkills.push(skill.value);
      }
      state.skills = newSkills;
    },
    dueDateChange: (state, action: PayloadAction<string>) => {
      state.dueDate = action.payload;
    },
    positionChange: (state, action: PayloadAction<MultiValue<{ value: Position; label: Position }>>) => {
      const { payload } = action;
      const newPositions: Position[] = [];
      for (const skill of payload) {
        newPositions.push(skill.value);
      }
      state.position = newPositions;
    },
    locationChange: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    imgFileChange: (state, action: PayloadAction<File>) => {
      state.imageFile = action.payload;
    },
    descriptionChange: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
  },
});

export const {
  titleChange,
  typeChange,
  maxMembersChange,
  skillsChange,
  dueDateChange,
  positionChange,
  locationChange,
  imgFileChange,
  descriptionChange,
} = groupCreateSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default groupCreateSlice.reducer;
