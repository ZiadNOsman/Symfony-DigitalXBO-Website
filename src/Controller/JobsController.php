<?php

namespace App\Controller;

use App\Entity\Jobs;
use App\Repository\JobsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
// use Symfony\Component\Serializer\Encoder\JsonEncoder;
// use Symfony\Component\Serializer\Encoder\XmlEncoder;
// use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
// use Symfony\Component\Serializer\Serializer;

#[Route('/jobs', name: 'jobs')]
class JobsController extends AbstractController
{
    #[Route('/', name: 'index')]

    public function index(JobsRepository $jobsRepository): Response
    {
        $jobs = $jobsRepository->findAll();
        if (!$jobs) {
            throw $this->createNotFoundException(
                'No jobs found'
            );
        }



        return $this->json($jobs, 200);
    }

    //route to get information of one job using its ID
    //ended up not using it and just retrieving all the jobs in one go 
    //if the website traffic is high, using this route would yield a better load on the database
    #[Route('/JobInformation/{id}', name: 'jobInformation')]

    public function jobInformation(JobsRepository $jobsRepository, $id): Response
    {
        $job = $jobsRepository->find($id);
        if (!$job) {
            throw $this->createNotFoundException(
                'No job found for id ' . $id
            );
        }

        return $this->json($job, 200);
    }



    //create a form for the jobapplication
    //https://symfony.com/doc/current/forms.html



}
