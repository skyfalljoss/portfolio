import ConcentricRingsSkills from './ConcentricRingsSkills';
import Card from '../ui/Card';

const TechStackCard = ({ rings, connections }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <Card padding="none" hover={false} className="overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="text-center mb-4">
            <h3 className="mb-1 text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:text-2xl">
              Technologies I Work With
            </h3>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Always learning and exploring new technologies
            </p>
          </div>

          <ConcentricRingsSkills rings={rings} connections={connections} />
        </div>
      </Card>
    </div>
  );
};

export default TechStackCard;
