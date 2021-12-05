import { useMediaQuery } from 'react-responsive';
import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Сurrency';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import Container from 'components/Container';
import Section from 'components/Section';
import s from './HomeTab.module.css';

export const HomeTab = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <>
      <Section>
        <Container>
          <div className={s.hometab}>
            <div className={s.leftSideBox}>
              <div>
                <Navigation className={s.navigation} />
                <Balance className={s.balance} />
              </div>
              {!isMobile && <Currency />}
            </div>
            <div className={s.table}>Table</div>
          </div>

          <ButtonAddTransactions />
        </Container>
      </Section>
    </>
  );
};
