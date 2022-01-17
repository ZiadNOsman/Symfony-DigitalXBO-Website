<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * JobApplication
 *
 * @ORM\Table(name="job_application", indexes={@ORM\Index(name="FK_139", columns={"job_id"})})
 * @ORM\Entity
 */
class JobApplication
{
    /**
     * @var int
     *
     * @ORM\Column(name="job_application_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $jobApplicationId;

    /**
     * @var string
     *
     * @ORM\Column(name="applicant_fname", type="string", length=255, nullable=false)
     */
    private $applicantFname;

    /**
     * @var string
     *
     * @ORM\Column(name="applicant_lname", type="string", length=255, nullable=false)
     */
    private $applicantLname;

    /**
     * @var string
     *
     * @ORM\Column(name="applicant_linkedin", type="string", length=255, nullable=false)
     */
    private $applicantLinkedin;

    /**
     * @var string
     *
     * @ORM\Column(name="applicant_motivation", type="text", length=0, nullable=false)
     */
    private $applicantMotivation;

    /**
     * @var \Jobs
     *
     * @ORM\ManyToOne(targetEntity="Jobs")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="job_id", referencedColumnName="job_id")
     * })
     */
    private $job;

    public function getJobApplicationId(): ?int
    {
        return $this->jobApplicationId;
    }

    public function getApplicantFname(): ?string
    {
        return $this->applicantFname;
    }

    public function setApplicantFname(string $applicantFname): self
    {
        $this->applicantFname = $applicantFname;

        return $this;
    }

    public function getApplicantLname(): ?string
    {
        return $this->applicantLname;
    }

    public function setApplicantLname(string $applicantLname): self
    {
        $this->applicantLname = $applicantLname;

        return $this;
    }

    public function getApplicantLinkedin(): ?string
    {
        return $this->applicantLinkedin;
    }

    public function setApplicantLinkedin(string $applicantLinkedin): self
    {
        $this->applicantLinkedin = $applicantLinkedin;

        return $this;
    }

    public function getApplicantMotivation(): ?string
    {
        return $this->applicantMotivation;
    }

    public function setApplicantMotivation(string $applicantMotivation): self
    {
        $this->applicantMotivation = $applicantMotivation;

        return $this;
    }

    public function getJob(): ?Jobs
    {
        return $this->job;
    }

    public function setJob(?Jobs $job): self
    {
        $this->job = $job;

        return $this;
    }
}
