import React from "react";
import Layout from '../../components/Layout/Layout';

const Policy = () => {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      padding: "3rem 2rem",
      gap: "2rem",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      maxWidth: "500px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    content: {
      maxWidth: "600px",
      fontSize: "1rem",
      color: "#444",
      lineHeight: "1.6",
    },
    heading: {
      fontSize: "1.8rem",
      fontWeight: "600",
      marginBottom: "1rem",
      color: "#222",
    },
    sectionTitle: {
      fontSize: "1.2rem",
      fontWeight: "500",
      marginTop: "1.5rem",
      color: "#000",
    },
  };

  return (
    <Layout>
      <div style={styles.container}>
        <div>
          <img
            src="/images/contactus.jpeg"
            alt="Privacy Policy"
            style={styles.image}
          />
        </div>

        <div style={styles.content}>
          <h2 style={styles.heading}>Privacy Policy</h2>
          <p>
            At TrendWear Clothing Store, we value your privacy. This policy
            outlines how we collect, use, and protect your information when you
            use our services.
          </p>

          <h4 style={styles.sectionTitle}>1. Information We Collect</h4>
          <p>
            We collect personal information such as your name, email address,
            shipping address, phone number, and payment details during the
            checkout process.
          </p>

          <h4 style={styles.sectionTitle}>2. How We Use Your Information</h4>
          <p>
            Your information is used to process orders, provide customer
            support, personalize your shopping experience, and send promotional
            offers (only with your consent).
          </p>

          <h4 style={styles.sectionTitle}>3. Data Protection</h4>
          <p>
            We use secure encryption technologies and industry-standard
            protocols to safeguard your data and ensure it is never shared with
            third-party vendors without your permission.
          </p>

          <h4 style={styles.sectionTitle}>4. Cookies</h4>
          <p>
            Our site uses cookies to enhance user experience, analyze site
            traffic, and display relevant ads. You may opt-out through your
            browser settings.
          </p>

          <h4 style={styles.sectionTitle}>5. Third-Party Links</h4>
          <p>
            We may include links to other websites. We are not responsible for
            their content or privacy practices, so we advise reviewing their
            policies.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
