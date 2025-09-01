
import React from 'react';
import { SKILLS } from '../constants';
import SectionWrapper from './SectionWrapper';
import { Skill } from '../types';

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-secondary/50 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:bg-secondary group">
      <Icon className="text-5xl mb-3 transition-colors duration-300" style={{ color: skill.color }} />
      <p className="text-light font-medium transition-colors duration-300 group-hover:text-accent">{skill.name}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Keahlian & Teknologi">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {SKILLS.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
